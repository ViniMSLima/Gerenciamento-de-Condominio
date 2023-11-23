import { Text, TextInput, View, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContext } from './Context';
import axios from 'axios';
import { sendEmail } from './send-email';
import { useCopyToClipboard } from 'usehooks-ts';


export default function PagamentoCondominio(props) {
    const { utils, setUtils } = useContext(UtilsContext);

    const [value, copy] = useCopyToClipboard();

    const PIX = "00020126730014BR.GOV.BCB.PIX0123vinisary.lima@gmail.com0224Pagamento do condomínio 5204000053039865406400.005802BR5924VINICIUS MATHEUS SARY DE6015SAO JOSE DOS PI62140510Condominio6304D702";

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
               'Can we get there?',
            'sus',
         { cc: 'vinisary.lima@gmail.com' }
        ).then(() => {
            console.log('Your message was successfully sent!');
        });

        props.navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>

            <Text style={styles.bigText}>Pagamento do Condomínio</Text>
            <Text style={styles.smallText}>Pix copia e cola</Text>

            <Text style={styles.smallText}>00020126730014BR.GOV.BCB.PIX0123vinisary.lima@gmail.com0224Pagamento do condomínio 5204000053039865406400.005802BR5924VINICIUS MATHEUS SARY DE6015SAO JOSE DOS PI62140510Condominio6304D702
</Text>

            <TouchableOpacity style={[styles.TouchableOpacity, { backgroundColor: "white", color: "black"}]}
                onPress={() => copy(PIX)}>
                    <Text>Copiar pix</Text>
                </TouchableOpacity>

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
