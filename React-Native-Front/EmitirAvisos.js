import { Text, TextInput, View, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContext } from './Context';
import axios from 'axios';


export default function EmitirAviso(props) {
    const { utils, setUtils } = useContext(UtilsContext);
    const [data, setData] = useState("");
    const [horario, setHorario] = useState("");
    const [aviso, setAviso] = useState("");
    const [informacoes, setInformacoes] = useState("");

    const dataAtual = new Date();
    const opcoesFormatacao = { day: 'numeric', month: '2-digit', year: 'numeric' };
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoesFormatacao);

    async function emitirAviso() {

        try {
            const response = await axios.post("http://localhost:8080/info", {
                "aviso": aviso,
                "data": data,
                "informacoes": informacoes,
                "dataAviso": dataFormatada.toString(),
                "horario": horario
            });

            console.log('Resposta da API PostUser:', response);
        } catch (error) {
            console.error('Erro ao enviar o user:', error);
        }

        props.navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>

            <Text style={styles.bigText}>Emitir aviso</Text>

            <Text style={styles.smallText}>Aviso</Text>
            <TextInput style={styles.inputs} onChangeText={text => setAviso(text)}
            ></TextInput>

            <Text style={styles.smallText}>Descrição</Text>
            <TextInput style={styles.inputs} onChangeText={text => setInformacoes(text)}
            ></TextInput>

            <Text style={styles.smallText}>Data</Text>
            <TextInput style={styles.inputs} onChangeText={text => setData(text)}
            ></TextInput>

            <Text style={styles.smallText}>Horário</Text>
            <TextInput style={styles.inputs} onChangeText={text => setHorario(text)}
            ></TextInput>

            <TouchableOpacity style={[styles.TouchableOpacity, { backgroundColor: "white", color: "black" }]}
                onPress={() => emitirAviso()}><Text>Enviar</Text></TouchableOpacity>

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
        width: "300px",
        height: "30px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        fontFamily: "Arial",
        marginTop: "30px"
    }

});
