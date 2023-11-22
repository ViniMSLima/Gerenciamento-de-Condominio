import { Text, TextInput, View, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContext } from './Context';
import axios from 'axios';
import qs from 'qs';
import { Linking } from 'react-native';

export default function CadastroApeEmail(props) {
    const { utils, setUtils } = useContext(UtilsContext);

    const [numero, setNumero] = useState("");
    const [bloco, setBloco] = useState("");
    const [vagas, setVagas] = useState("");

    // let arrayUtils = [];

    async function CadastroApe() {
        // if (utils.data) {
        //     arrayUtils = [...utils.data];
        // }

        // arrayUtils.push({ nome, dataDeNascimento, telefone, cpf, email, senha, isAdm });
        // setUtils({ ...utils, data: arrayUtils });

        try {
            const response = await axios.post("http://localhost:8080/apes", {
                "numero": numero,
                "bloco": bloco,
                "vagasDeEstacionamento": vagas
            });

            console.log('Resposta da API PostUser:', response);
        } catch (error) {
            console.error('Erro ao enviar o user:', error);
        }

        sendEmail(
            'condominiosenai@gmail.com',
            'Greeting!',
            'ENTAO TOMA ENTAO!!!!!!!!!!!!!!!!!'
        ).then(() => {
            console.log('Our email successful provided to device mail ');
        });

        props.navigation.navigate('Home');
    }

    async function sendEmail(to, subject, body, options = {}) {
        const { cc, bcc } = options;
    
        let url = `mailto:${to}`;
    
        // Create email link query
        const query = qs.stringify({
            subject: subject,
            body: body,
            cc: cc,
            bcc: bcc
        });
    
        if (query.length) {
            url += `?${query}`;
        }
    
        // check if we can use this link
        const canOpen = await Linking.canOpenURL(url);
    
        if (!canOpen) {
            throw new Error('Provided URL can not be handled');
        }
    
        return Linking.openURL(url);
    }
    

    
    return (
        <View style={styles.container}>

            <Text style={styles.bigText}>Cadastro de Apartamentos</Text>

            <Text style={styles.smallText}>Numero (1-500)</Text>
            <TextInput style={styles.inputs} onChangeText={text => setNumero(text)}
            ></TextInput>

            <View style={{ justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                <View><Text>Bloco (A-Z)</Text>
                    <TextInput onChangeText={text => setBloco(text.toUpperCase())} style={[styles.smallInput, { marginRight: "10px" }]}
                    ></TextInput>
                </View>
                <View>
                    <Text>Qtd Vagas (1-3)</Text>
                    <TextInput onChangeText={text => setVagas(text)} style={styles.smallInput}
                    ></TextInput>
                </View>
            </View>

            <TouchableOpacity style={[styles.TouchableOpacity, { backgroundColor: "white", color: "black"}]}
                onPress={() => CadastroApe()}><Text>Cadastrar</Text></TouchableOpacity>

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
        width: "200px"
    },
    inputs: {
        backgroundColor: "white",
        width: "200px",
        marginBottom: "20px",
        height: "30px",
        borderRadius: "10px",
        marginTop: "5px"
    },
    smallInput: {
        backgroundColor: "white",
        width: "95px",
        marginBottom: "20px",
        height: "30px",
        borderRadius: "10px",
        marginTop: "5px"
    },
    bigText: {
        fontSize: "42px",
        marginBottom: "50px"
    },
    TouchableOpacity: {
        width: "200px",
        height: "30px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        fontFamily: "Arial",
        marginTop: "30px"
    }

});
