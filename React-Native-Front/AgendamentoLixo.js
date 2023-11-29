import { Text, TextInput, View, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { useState, useContext } from 'react';
import { UtilsContext } from './Context';
import axios from 'axios';


export default function AgendamentoLixo(props) {
    const { utils, setUtils } = useContext(UtilsContext);
    const [data, setData] = useState("");
    const [horario, setHorario] = useState("");
    const [assembleia, setAssembleia] = useState("");

    const [booleano, setBooleano] = useState(false);

    const dataAtual = new Date();
    const opcoesFormatacao = { day: 'numeric', month: '2-digit', year: 'numeric' };
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoesFormatacao);

    async function emitirAvisoLixo() {

        try {
            const response = await axios.post("http://localhost:8080/info", {
                "aviso": "Agendamento de lixo",
                "data": data,
                "informacoes": "Nova data de coleta de lixo",
                "dataAviso": dataFormatada.toString(),
                "horario": horario
            });

        } catch (error) {
            console.error('Erro ao enviar o user:', error);
        }

        props.navigation.navigate('Home');
    }

    async function emitirAvisoAssembleia() {

        try {
            const response = await axios.post("http://localhost:8080/info", {
                "aviso": "Agendamento de assembleia",
                "data": data,
                "informacoes": assembleia,
                "dataAviso": dataFormatada.toString(),
                "horario": horario
            });
            
        } catch (error) {
            console.error('Erro ao enviar o user:', error);
        }

        props.navigation.navigate('Home');
    }

    return (

        <View style={styles.container}>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.TouchableOpacity2}
                    onPress={() => setBooleano(false)}><Text>Lixo</Text></TouchableOpacity>
                <TouchableOpacity style={styles.TouchableOpacity2}
                    onPress={() => setBooleano(true)}><Text>Assembleia</Text></TouchableOpacity>
            </View>

            {booleano == 0 ?
                <View style={styles.align}>
                    <Text style={styles.bigText}>Agendamento do lixo</Text>

                    <Text style={styles.smallText}>Nova data da coleta</Text>
                    <TextInput style={styles.inputs} onChangeText={text => setData(text)}
                    ></TextInput>

                    <Text style={styles.smallText}>Horário</Text>
                    <TextInput style={styles.inputs} onChangeText={text => setHorario(text)}
                    ></TextInput>

                    <TouchableOpacity style={[styles.TouchableOpacity, { backgroundColor: "white", color: "black" }]}
                        onPress={() => emitirAvisoLixo()}><Text>Enviar</Text></TouchableOpacity>

                    <TouchableOpacity style={[styles.TouchableOpacity, { backgroundColor: "lightgrey", color: "white" }]}
                        onPress={() => props.navigation.navigate("Home")}><Text>Cancelar</Text></TouchableOpacity>

                </View>
                :
                <View style={styles.align}>
                    <Text style={styles.bigText}>Agendamento de assembleia</Text>

                    <Text style={styles.smallText}>Data</Text>
                    <TextInput style={styles.inputs} onChangeText={text => setData(text)}
                    ></TextInput>

                    <Text style={styles.smallText}>Horário</Text>
                    <TextInput style={styles.inputs} onChangeText={text => setHorario(text)}
                    ></TextInput>
                    
                    <Text style={styles.smallText}>Descrição</Text>
                    <TextInput style={styles.inputs} onChangeText={text => setAssembleia(text)}
                    ></TextInput>

                    <TouchableOpacity style={[styles.TouchableOpacity, { backgroundColor: "white", color: "black" }]}
                        onPress={() => emitirAvisoAssembleia()}><Text>Enviar</Text></TouchableOpacity>

                    <TouchableOpacity style={[styles.TouchableOpacity, { backgroundColor: "lightgrey", color: "white" }]}
                        onPress={() => props.navigation.navigate("Home")}><Text>Cancelar</Text></TouchableOpacity>

                </View>
            }
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
        fontSize: "35px",
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
    },
    TouchableOpacity2: {
        width: "100px",
        height: "30px",
        margin: "10px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        fontFamily: "Arial",
        marginTop: "30px",
        backgroundColor: "white",
        marginBottom: "20px"
    },
    buttons: {
        display: "flex",
        flexDirection: "row"
    },
    align:{
        alignItems: "center"
    }
    

});
