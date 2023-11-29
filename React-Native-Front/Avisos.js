import { Text, View, StyleSheet, FlatList, TouchableOpacity, TextInput, Switch } from "react-native";
import { UtilsContext } from './Context';
import { useState, useContext, useCallback } from 'react';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

export default function Avisos(props) {
    const { utils, setUtils } = useContext(UtilsContext);

    const [avisos, setAvisos] = useState([]);
    const [reclamacoes, setReclamacoes] = useState([]);

    const [problema, setProblema] = useState("");
    const [data, setData] = useState("");
    const [horario, setHorario] = useState("");
    const [descricao, setDescricao] = useState("");

    const [booleano, setBooleano] = useState(false);

    const dataAtual = new Date();
    const opcoesFormatacao = { day: 'numeric', month: '2-digit', year: 'numeric' };
    const dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoesFormatacao);

    async function resolver(item) {

        var a = false;
        {item.resolvido == "true"? a = false : a = true}

        try {
            const response = await axios.put("http://localhost:8080/reclamacao/" + item.id, {
                "problema": item.problema,
                "data": item.data,
                "descricao": item.descricao,
                "dataAviso": item.dataAviso,
                "horario": item.horario,
                "resolvido": a
            });
            emitirAvisoResolvido(item.problema, item.data);
            getReclamacoes();
        } catch (error) {
            console.error('Erro ao enviar o user:', error);
        }

    }

    async function emitirAvisoResolvido(problema1, data1) {

        try {
            const response = await axios.post("http://localhost:8080/info", {
                "aviso": "Problema resolvido",
                "data": data1,
                "informacoes": problema1,
                "dataAviso": dataFormatada.toString(),
                "horario": "00:00"
            });

        } catch (error) {
            console.error('Erro ao enviar o user:', error);
        }

        props.navigation.navigate('Home');
    }

    async function getAvisos() {

        try {
            const response = await axios.get("http://localhost:8080/info", {
            });
            response.data.reverse();
            setAvisos(response.data);
        } catch (error) {
            console.error('Erro ao puxar os avisos: ', error);
        }
    }

    async function getReclamacoes() {

        try {
            const response = await axios.get("http://localhost:8080/reclamacao", {
            });
            response.data.reverse();
            setReclamacoes(response.data);
        } catch (error) {
            console.error('Erro ao puxar os avisos: ', error);
        }
    }

    async function deleteFromLista(id) {

        try {
            const response = await axios.delete("http://localhost:8080/info/" + id, {
            });
            getAvisos();
        } catch (error) {
            console.error('Erro ao deletar o aviso: ', error);
        }
    }

    async function deleteReclamacao(id) {

        try {
            const response = await axios.delete("http://localhost:8080/reclamacao/" + id, {
            });
            getReclamacoes();
        } catch (error) {
            console.error('Erro ao deletar o aviso: ', error);
        }
    }

    useFocusEffect(
        useCallback(() => {
            getAvisos();
            getReclamacoes();
        }, [])
    );

    async function emitirReclamacao() {

        try {
            const response = await axios.post("http://localhost:8080/reclamacao", {
                "problema": problema,
                "data": data,
                "descricao": descricao,
                "dataAviso": dataFormatada.toString(),
                "horario": horario,
                "resolvido": false
            });

        } catch (error) {
            console.error('Erro ao enviar o user:', error);
        }

        getReclamacoes();
    }

    return (

        <View style={styles.container}>

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.TouchableOpacity2}
                    onPress={() => props.navigation.navigate("Home")}><Text>Voltar</Text></TouchableOpacity>
                <TouchableOpacity style={styles.TouchableOpacity2}
                    onPress={() => setBooleano(false)}><Text>Avisos</Text></TouchableOpacity>
                <TouchableOpacity style={styles.TouchableOpacity2}
                    onPress={() => setBooleano(true)}><Text>Reclamacao</Text></TouchableOpacity>
            </View>

            {booleano == 0 ?
                <View style={styles.align}>
                    <Text style={styles.bigText}>Avisos</Text>

                    <FlatList
                        data={avisos}
                        renderItem={
                            ({ item }) =>
                                <View style={{ backgroundColor: "white", width: "300px", borderRadius: "10px", border: "none", marginBottom: "10px" }}>
                                    <Text style={styles.Aviso}>Aviso: {item.aviso} </Text>
                                    <Text style={styles.Info}>Horario: {item.horario}</Text>
                                    <Text style={styles.Info}>Informações: {item.informacoes}</Text>
                                    <Text style={styles.Info}>data: {item.data}</Text>
                                    <Text style={styles.Info}>data de emissão do aviso: {item.dataAviso}</Text>

                                    {utils.isAdm == "true" ?
                                        <TouchableOpacity style={styles.TouchableOpacity3}
                                            onPress={() => deleteFromLista(item.id)}><Text>Excluir</Text></TouchableOpacity>
                                        : null}
                                </View>
                        }
                        keyExtractor={(item) => item.id}
                    >
                    </FlatList>

                </View>
                :
                <View style={styles.align}>
                    <Text style={styles.bigText}>Reclamação</Text>

                    <Text style={styles.smallText}>Problema</Text>
                    <TextInput style={styles.inputs} onChangeText={text => setProblema(text)}
                    ></TextInput>

                    <Text style={styles.smallText}>Data</Text>
                    <TextInput style={styles.inputs} onChangeText={text => setData(text)}
                    ></TextInput>

                    <Text style={styles.smallText}>Horário</Text>
                    <TextInput style={styles.inputs} onChangeText={text => setHorario(text)}
                    ></TextInput>

                    <Text style={styles.smallText}>Descrição</Text>
                    <TextInput style={styles.inputs} onChangeText={text => setDescricao(text)}
                    ></TextInput>

                    <TouchableOpacity style={[styles.TouchableOpacity, { backgroundColor: "white", color: "black" }]}
                        onPress={() => emitirReclamacao()}><Text>Enviar</Text></TouchableOpacity>

                    <TouchableOpacity style={[styles.TouchableOpacity, { backgroundColor: "lightgrey", color: "white" }]}
                        onPress={() => props.navigation.navigate("Home")}><Text>Cancelar</Text></TouchableOpacity>

                    <FlatList
                        data={reclamacoes}
                        renderItem={
                            ({ item }) =>
                                <View style={{ backgroundColor: "white", width: "300px", borderRadius: "10px", border: "none", marginBottom: "10px" }}>
                                    <Text style={styles.Aviso}>Problema: {item.problema} </Text>
                                    <Text style={styles.Info}>Horario: {item.horario}</Text>
                                    <Text style={styles.Info}>descricao: {item.descricao}</Text>
                                    <Text style={styles.Info}>data: {item.data}</Text>
                                    <Text style={styles.Info}>data de emissão: {item.dataAviso}</Text>
                                    <Text style={styles.Info}>Resolvido: {item.resolvido == "true" ? "Sim" : "Não"}</Text>

                                    {utils.isAdm == "true" ?
                                        <View style={styles.buttons}>
                                            <TouchableOpacity style={styles.TouchableOpacity4}
                                                onPress={() => resolver(item)}><Text>Resolvido</Text></TouchableOpacity>
                                            <TouchableOpacity style={styles.TouchableOpacity3}
                                                onPress={() => deleteReclamacao(item.id)}><Text>Excluir</Text></TouchableOpacity>
                                        </View>
                                        : null}
                                </View>
                        }
                        keyExtractor={(item) => item.id}
                    >
                    </FlatList>

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
        marginTop: "5px",
        border: "none"
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
        marginTop: "30px",
        backgroundColor: "white",
        marginBottom: "20px"
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
    TouchableOpacity3: {
        width: "100px",
        height: "30px",
        margin: "10px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        fontFamily: "Arial",
        marginTop: "30px",
        backgroundColor: "red",
        marginBottom: "20px",
        color: "85292e"
    },
    TouchableOpacity4: {
        width: "100px",
        height: "30px",
        margin: "10px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        fontFamily: "Arial",
        marginTop: "30px",
        backgroundColor: "lightgreen",
        marginBottom: "20px",
        color: "green"
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        width: "300px",
        justifyContent: "center"
    },
    Info: {
        marginBottom: "5px",
        marginLeft: "5px"
    },
    Aviso: {
        fontSize: "18px",
        fontWeight: "bold",
        marginBottom: "5px",
        marginLeft: "5px"
    },
    align: {
        alignItems: "center"
    }
});
