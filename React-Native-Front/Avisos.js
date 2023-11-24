import { Text, View, StyleSheet, FlatList } from "react-native";
import { UtilsContext } from './Context';
import { useState, useContext, useCallback } from 'react';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

export default function Avisos(props) {
    const { utils, setUtils } = useContext(UtilsContext);
    const [avisos,setAvisos] = useState([])
    
    async function getAvisos() {
        
        try {
            const response = await axios.get("http://localhost:8080/info", {
            });
            console.log('Resposta da API PostUser:', response.data);
            setAvisos(response.data)
        } catch (error) {
            console.error('Erro ao enviar o user:', error);
        }
    }
    
    useFocusEffect(
        useCallback(() => {
            getAvisos();
        }, [])
    );
    
    return (
        <View style={styles.container}>

            <Text style={styles.bigText}>Avisos</Text>

            <FlatList
                data={avisos}
                renderItem={
                    ({ item }) =>
                    <View style={{ backgroundColor: "white" ,width: "300px", borderRadius: "10px", border: "none", marginBottom: "10px" }}>
                    <Text style={styles.Aviso}>Aviso: {item.aviso} </Text>
                    <Text style={styles.Info}>Horario: {item.horario}</Text>
                    <Text style={styles.Info}>Informações: {item.informacoes}</Text>
                    <Text style={styles.Info}>data: {item.data}</Text>
                    <Text style={styles.Info}>data de emissão do aviso: {item.dataAviso}</Text>
                </View>
                }
                keyExtractor={(item) => item.id}
            >
            </FlatList>

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
        marginTop: "30px"
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
    }
});
