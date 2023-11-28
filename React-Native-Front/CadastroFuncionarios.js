import { Text, TextInput, View, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContext } from './Context';
import axios from 'axios';

export default function Login(props) {
    const { utils, setUtils } = useContext(UtilsContext);

    const [nome, setNome] = useState("");
    const [dataDeNascimento, setDataDeNascimento] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cpf, setCPF] = useState("");
    const [email, setEmail] = useState("");
    const [carteiraDeTrabalho, setCarteiraDeTrabalho] = useState("");

    const dataAtual = new Date();
    const opcoesFormatacao = { day: 'numeric', month: '2-digit', year: 'numeric' };
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoesFormatacao);

    async function emitirAviso() {

        try {
            const response = await axios.post("http://localhost:8080/info", {
                "aviso": "Novo Funcionário",
                "data": dataFormatada.toString(),
                "informacoes": "Novo Funcionário: " + nome,
                "dataAviso": dataFormatada.toString(),
                "horario": "00:00"
            });

            console.log('Resposta da API PostUser:', response);
        } catch (error) {
            console.error('Erro ao enviar o user:', error);
        }

        props.navigation.navigate('Home');
    }

    async function Cadastro() {
        // if (utils.data) {
        //     arrayUtils = [...utils.data];
        // }

        // arrayUtils.push({ nome, dataDeNascimento, telefone, cpf, email, senha, isAdm });
        // setUtils({ ...utils, data: arrayUtils });

        try {
            const response = await axios.post("http://localhost:8080/func", {
                "name": nome,
                "cpf": cpf,
                "email": email,
                "phone": telefone,
                "dateOfBirth": dataDeNascimento,
                "carteiraDeTrabalho": carteiraDeTrabalho,
            });

            console.log('Resposta da API PostUser:', response);
        } catch (error) {
            console.error('Erro ao enviar o user:', error);
        }
        emitirAviso();
        props.navigation.navigate('Home');
    }


    return (
        <View style={styles.container}>

            <Text style={styles.bigText}>Cadastro de Funcionários</Text>

            <Text style={styles.smallText}>Nome</Text>
            <TextInput style={styles.inputs} onChangeText={text => setNome(text)}
            ></TextInput>

            <View style={{ justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                <View><Text>Nascimento</Text>
                    <TextInput onChangeText={text => setDataDeNascimento(text)} style={[styles.smallInput, { marginRight: "10px" }]}
                    ></TextInput>
                </View>
                <View>
                    <Text>CPF</Text>
                    <TextInput onChangeText={text => setCPF(text)} style={styles.smallInput}
                    ></TextInput>
                </View>
            </View>

            <Text style={styles.smallText}>Telefone</Text>
            <TextInput
                onChangeText={text => setTelefone(text)}
                style={styles.inputs}
            ></TextInput>

            <Text style={styles.smallText}>Email</Text>
            <TextInput
                onChangeText={text => setEmail(text)}
                style={styles.inputs}
            ></TextInput>

            <Text style={styles.smallText}>Carteira de trabalho</Text>
            <TextInput
                onChangeText={text => setCarteiraDeTrabalho(text)}
                style={styles.inputs}
            ></TextInput>

            <TouchableOpacity style={[styles.TouchableOpacity, { backgroundColor: "white", color: "black" }]}
                onPress={() => Cadastro()}><Text>Cadastrar</Text></TouchableOpacity>

            <TouchableOpacity style={[styles.TouchableOpacity, { backgroundColor: "lightgrey", color: "white" }]}
                onPress={() => props.navigation.navigate("Home")}><Text>Cancelar</Text></TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        widht: 100,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textArea: {
        backgroundColor: 'white',
        color: 'white'
    },
    smallText: {
        alignContent: "flex-start",
        width: "300px"
    },
    inputs: {
        backgroundColor: "white",
        width: "300px",
        marginBottom: "20px",
        height: "30px",
        borderRadius: "10px",
        marginTop: "5px"
    },
    smallInput: {
        backgroundColor: "white",
        width: "145px",
        marginBottom: "20px",
        height: "30px",
        borderRadius: "10px",
        marginTop: "5px"
    },
    bigText: {
        fontSize: "32px",
        marginBottom: "50px"
    },
    TouchableOpacity: {
        width: "300px",
        height: "30px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        fontFamily: "Arial",
        marginTop: "30px"
    }

});
