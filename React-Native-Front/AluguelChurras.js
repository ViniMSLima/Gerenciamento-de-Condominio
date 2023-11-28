import { Text, TextInput, View, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useState, useContext, useEffect } from 'react';
import { UtilsContext } from './Context';
import axios from 'axios';


export default function AluguelChurras(props) {
    const { utils, setUtils } = useContext(UtilsContext);

    const [data, setData] = useState("");
    const [email, setEmail] = useState("");
    const [lista, setLista] = useState([]);
    const [numero, setNumero] = useState("");

    async function Churras() {

        try {
            const response = await axios.post("http://localhost:8080/churras", {
                "numero": numero,
                "email": email,
                "data": data
            });

            console.log('Resposta da API PostUser:', response);
        } catch (error) {
            console.error('Erro ao enviar o user:', error);
        }

        props.navigation.navigate('Home');
    }

    async function getLista() {


        try {
            const response = await axios.get("http://localhost:8080/churras", {
            });
            setLista(response.data)
        } catch (error) {
            console.error('Erro ao enviar o user:', error);
        }
    }

    useEffect(() => {
        getLista();
    }, [])

    return (
        <View style={styles.container}>

            <Text style={styles.bigText}>Aluguel Churras</Text>

            <Text style={styles.smallText}>Numero (1-20)</Text>
            <TextInput style={styles.inputs} onChangeText={text => setNumero(text)}
            ></TextInput>

            <View style={{ justifyContent: "space-between", display: "flex", flexDirection: "row" }}>
                <View><Text>Data</Text>
                    <TextInput onChangeText={text => setData(text)} style={[styles.smallInput, { marginRight: "10px" }]}
                    ></TextInput>
                </View>
                <View>
                    <Text>Email</Text>
                    <TextInput onChangeText={text => setEmail(text)} style={styles.smallInput}
                    ></TextInput>
                </View>
            </View>

            <TouchableOpacity style={[styles.TouchableOpacity, { backgroundColor: "white", color: "black" }]}
                onPress={() => Churras()}><Text>Alugar</Text></TouchableOpacity>

            <TouchableOpacity style={[styles.TouchableOpacity, { backgroundColor: "lightgrey", color: "white" }]}
                onPress={() => props.navigation.navigate("Home")}><Text>Cancelar</Text></TouchableOpacity>

            {utils.isAdm == "true" ?
                <FlatList
                    data={lista}
                    renderItem={
                        ({ item }) =>
                            <View style={{ backgroundColor: "white", width: "300px", borderRadius: "10px", border: "none", marginBottom: "10px" }}>
                                <Text style={styles.Aviso}>Churrasqueira: {item.numero} </Text>
                                <Text style={styles.Info}>data: {item.data}</Text>
                                <Text style={styles.Info}>email: {item.email}</Text>
                                <TouchableOpacity style={styles.TouchableOpacity3}
                                    onPress={() => deleteFromLista(0, item.id)}>Excluir</TouchableOpacity>
                            </View>
                    }
                    keyExtractor={(item) => item.id}
                >
                </FlatList>
                : null}
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
    },
    smallText: {
        alignContent: "flex-start",
        width: "300px"
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
    buttons: {
        display: "flex",
        flexDirection: "row"
    }

});
