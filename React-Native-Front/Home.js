import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { UtilsContext } from './Context';
import { useState, useContext } from 'react';

export default function Usuarios(props) {
    const { utils, setUtils } = useContext(UtilsContext);
    console.log(utils);

    return (
        <View style={styles.container}>

            <Text style={styles.bigText}>Condominium</Text>

            <View style={styles.body}>

                <TouchableOpacity
                    style={[
                        styles.HomeOptions, { backgroundColor: "#40E0D0" }
                    ]}
                    onPress={() => goToCadastro()}
                >
                    <Text style={styles.HomeOptinsText}>Aluguel de churrasqueira</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.HomeOptions, { backgroundColor: "#DC143C" }
                    ]}
                    onPress={() => goToCadastro()}
                >
                    <Text style={styles.HomeOptinsText}>Gerar boleto de pagamento</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <TouchableOpacity
                    style={[
                        styles.HomeOptions, { backgroundColor: "#836FFF" }
                    ]}
                    onPress={() => goToCadastro()}
                >
                    <Text style={styles.HomeOptinsText}>Configuracoes</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.HomeOptions, { backgroundColor: "#87CEFA" }
                    ]}
                    onPress={() => goToCadastro()}
                >
                    <Text style={styles.HomeOptinsText}>Meu perfil</Text>
                </TouchableOpacity>


            </View>

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
    body: {
        display: 'flex',
        flexDirection: 'row'
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
        marginTop: "5px",
        borderColor: "grey",
        borderWidth: "1px"
    },
    bigText: {
        fontSize: "42px",
        marginBottom: "50px",
        color: "white"
    },
    HomeOptions: {
        width: "150px",
        height: "150px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        fontFamily: "Arial",
        marginTop: "30px",
        margin: '10px'

    },
    HomeOptinsText:
    {
        color: "white",
        textAlign: "center",
        fontSize: "18px",
        fontWeight: "bold"
    }

});
