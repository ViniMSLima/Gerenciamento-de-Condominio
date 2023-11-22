import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { UtilsContext } from './Context';
import { useState, useContext } from 'react';



export default function Home(props) {
    const { utils, setUtils } = useContext(UtilsContext);

    function goToProfile() {
        props.navigation.navigate('Profile');
    }
    
    function goToCadastro()
    {
        // setUtils({...utils, email: email});
        props.navigation.navigate('Cadastro');
    }

    function goToCadastroFunc()
    {
        // setUtils({...utils, email: email});
        props.navigation.navigate('CadastroFunc');
    }

    function goToCadastroApe() {
        props.navigation.navigate('CadastroApe');
    }

    return (
        <View style={styles.container}>

            <Text style={styles.bigText}>Condomínio</Text>

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
                    <Text style={styles.HomeOptinsText}>Configurações</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.HomeOptions, { backgroundColor: "#87CEFA" }
                    ]}
                    onPress={() => goToProfile()}
                >
                    <Text style={styles.HomeOptinsText}>Meu perfil</Text>
                </TouchableOpacity>

            </View>

            {utils.isAdm == "true" ?
            <View>
                <View style={styles.body}>
                    <TouchableOpacity
                        style={[
                            styles.HomeOptions, { backgroundColor: "#fc8c03" }
                        ]}
                        onPress={() => goToCadastro()}
                    >
                        <Text style={styles.HomeOptinsText}>Cadastro de moradores</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.HomeOptions, { backgroundColor: "#272cd6" }
                        ]}
                        onPress={() => goToCadastroFunc()}
                    >
                        <Text style={styles.HomeOptinsText}>Cadastro de funcionários</Text>
                    </TouchableOpacity>

                </View> 
                <View style={styles.body}>
                <TouchableOpacity
                    style={[
                        styles.HomeOptions, { backgroundColor: "#d10023" }
                    ]}
                    onPress={() => goToCadastroApe()}
                >
                    <Text style={styles.HomeOptinsText}>Cadastro de apartamentos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.HomeOptions, { backgroundColor: "#00d146" }
                    ]}
                    onPress={() => goToCadastro()}
                >
                    <Text style={styles.HomeOptinsText}>Agendamento da coleta de lixo</Text>
                </TouchableOpacity>

            </View>  
            </View>             
                
                : ""}


            <Text style={styles.userInfo}>User: {utils.name}</Text>
            <Text style={styles.userInfo}>Email: {utils.email}</Text>
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
        fontSize: "50px",
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
    },
    userInfo: {
        color: "white",
        fontSize: "20px",
    }

});
