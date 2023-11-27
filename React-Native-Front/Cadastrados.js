import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { UtilsContext } from './Context';
import { useState, useContext } from 'react';
import axios from 'axios';

export default function Cadastrados(props) {
    const { utils, setUtils } = useContext(UtilsContext);
    const [lista, setAvisos] = useState([])
    const [num, setNum] = useState()

    async function getLista(a) {

        setNum(a);

        switch (a) {
            case 0:
                try {
                    const response = await axios.get("http://localhost:8080/user", {
                    });
                    setAvisos(response.data)
                } catch (error) {
                    console.error('Erro ao enviar o user:', error);
                }
                break;
            case 1:
                try {
                    const response = await axios.get("http://localhost:8080/apes", {
                    });
                    setAvisos(response.data)
                } catch (error) {
                    console.error('Erro ao enviar o user:', error);
                }
                break;
            case 2:
                try {
                    const response = await axios.get("http://localhost:8080/func", {
                    });
                    setAvisos(response.data)
                } catch (error) {
                    console.error('Erro ao enviar o user:', error);
                }
                break;
        }
    }


    return (
        <View style={styles.container}>

            <Text style={styles.bigText}>Cadastrados</Text>


            <View style={styles.buttons}>
                <TouchableOpacity style={styles.TouchableOpacity2}
                    onPress={() => getLista(0)}><Text>Moradores</Text></TouchableOpacity>
                <TouchableOpacity style={styles.TouchableOpacity2}
                    onPress={() => getLista(1)}><Text>Apartamentos</Text></TouchableOpacity>
                <TouchableOpacity style={styles.TouchableOpacity2}
                    onPress={() => getLista(2)}><Text>Funcionários</Text></TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.TouchableOpacity}
                onPress={() => props.navigation.navigate("Home")}><Text>Voltar</Text></TouchableOpacity>

            {num == 0 ?
                <FlatList
                    data={lista}
                    renderItem={
                        ({ item }) =>
                            <View style={{ backgroundColor: "white", width: "300px", borderRadius: "10px", border: "none", marginBottom: "10px" }}>
                                <Text style={styles.Aviso}>Nome: {item.name} </Text>
                                <Text style={styles.Info}>cpf: {item.cpf}</Text>
                                <Text style={styles.Info}>email: {item.email}</Text>
                                <Text style={styles.Info}>data de nascimento: {item.dateOfBirth}</Text>
                                <Text style={styles.Info}>telefone: {item.phone}</Text>
                                <Text style={styles.Info}>Adm: {item.isAdm}</Text>
                            </View>
                    }
                    keyExtractor={(item) => item.id}
                >
                </FlatList>
                : null}

            {num == 1 ?
                <FlatList
                    data={lista}
                    renderItem={
                        ({ item }) =>
                            <View style={{ backgroundColor: "white", width: "300px", borderRadius: "10px", border: "none", marginBottom: "10px" }}>
                                <Text style={styles.Aviso}>Numero: {item.numero} </Text>
                                <Text style={styles.Info}>Vagas de estacionamento: {item.vagasDeEstacionamento}</Text>
                                <Text style={styles.Info}>Bloco: {item.bloco}</Text>
                            </View>
                    }
                    keyExtractor={(item) => item.id}
                >
                </FlatList>
                : null}

            {num == 2 ?
                <FlatList
                    data={lista}
                    renderItem={
                        ({ item }) =>
                            <View style={{ backgroundColor: "white", width: "300px", borderRadius: "10px", border: "none", marginBottom: "10px" }}>
                                <Text style={styles.Aviso}>Nome: {item.name} </Text>
                                <Text style={styles.Info}>cpf: {item.cpf}</Text>
                                <Text style={styles.Info}>email: {item.email}</Text>
                                <Text style={styles.Info}>data de nascimento: {item.dateOfBirth}</Text>
                                <Text style={styles.Info}>telefone: {item.phone}</Text>
                                <Text style={styles.Info}>Carteira de trabalho: {item.carteiraDeTrabalho}</Text>
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
        width: "200px",
        marginBottom: "20px",
        height: "30px",
        borderRadius: "10px",
        marginTop: "5px",
        borderColor: "grey",
        borderWidth: "1px"
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
