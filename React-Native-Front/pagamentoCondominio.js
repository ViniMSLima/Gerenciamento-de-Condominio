import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContext } from './Context';
import axios from 'axios';
import { useCopyToClipboard } from 'usehooks-ts';


export default function PagamentoCondominio(props) {
    const { utils, setUtils } = useContext(UtilsContext);

    const [value, copy] = useCopyToClipboard();

    const PIX = "00020126730014BR.GOV.BCB.PIX0123vinisary.lima@gmail.com0224Pagamento do condomínio 5204000053039865406400.005802BR5924VINICIUS MATHEUS SARY DE6015SAO JOSE DOS PI62140510Condominio6304D702";

    async function CadastroApe() {

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

        props.navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>

            <Text style={styles.bigText}>Pagamento do Condomínio</Text>
            <Text style={styles.smallText}>Pix copia e cola</Text>
            <Text style={styles.smallText}>   </Text>

            <Text style={styles.smallText}>00020126730014BR.GOV.BCB.PIX0123vinisary.lima@gmail.com0224Pagamento do condomínio 5204000053039865406400.005802BR5924VINICIUS MATHEUS SARY DE6015SAO JOSE DOS PI62140510Condominio6304D702
            </Text>

            <TouchableOpacity style={[styles.TouchableOpacity, { backgroundColor: "lightgrey" }]}
                onPress={() => copy(PIX)}>
                <Text>Copiar pix</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.TouchableOpacity, { backgroundColor: "lightgrey" }]}
                onPress={() => props.navigation.navigate("Home")}><Text>Voltar</Text></TouchableOpacity>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        widht: 100,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textArea: {
        backgroundColor: 'white',
        color: 'white'
    },
    smallText: {
        alignContent: "flex-start",
        width: "200px",
        color: "white"
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
        fontSize: "32px",
        marginBottom: "50px",
        color: "white"
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
