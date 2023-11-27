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

    function goToPagamentoCondominio() {
        props.navigation.navigate('PagamentoCondominio');
    }

    function goToAgendamentoLixo() {
        props.navigation.navigate('AgendamentoLixo');
    }

    function goToEmitirAviso() {
        props.navigation.navigate('EmitirAviso');
    }

    function goToAvisos() {
        props.navigation.navigate('Avisos');
    }

    function goToCadastrados() {
        props.navigation.navigate('Cadastrados');
    }

    function goToChurras() {
        props.navigation.navigate('Churras');
    }
    
    return (
        <View style={styles.container}>

            <Text style={styles.bigText}>Condomínio</Text>

            <View style={styles.body}>

                <TouchableOpacity
                    style={[
                        styles.HomeOptions, { backgroundColor: "#041870" }
                    ]}
                    onPress={() => goToChurras()}
                >
                    <Text style={styles.HomeOptinsText}>Aluguel de churrasqueira</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.HomeOptions, { backgroundColor: "#0ad1c1" }
                    ]}
                    onPress={() => goToPagamentoCondominio()}
                >
                    <Text style={styles.HomeOptinsText}>Gerar boleto de pagamento</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <TouchableOpacity
                    style={[
                        styles.HomeOptions, { backgroundColor: "#d41d08" }
                    ]}
                    onPress={() => goToAvisos()}
                >
                    <Text style={styles.HomeOptinsText}>Central de Avisos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.HomeOptions, { backgroundColor: "#e68217" }
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
                            styles.HomeOptions, { backgroundColor: "#1b5e07" }
                        ]}
                        onPress={() => goToCadastro()}
                    >
                        <Text style={styles.HomeOptinsText}>Cadastro de moradores</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.HomeOptions, { backgroundColor: "#14a7cc" }
                        ]}
                        onPress={() => goToCadastroFunc()}
                    >
                        <Text style={styles.HomeOptinsText}>Cadastro de funcionários</Text>
                    </TouchableOpacity>

                </View> 
                <View style={styles.body}>
                <TouchableOpacity
                    style={[
                        styles.HomeOptions, { backgroundColor: "#0396ff" }
                    ]}
                    onPress={() => goToCadastroApe()}
                >
                    <Text style={styles.HomeOptinsText}>Cadastro de apartamentos</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.HomeOptions, { backgroundColor: "#4d587d" }
                    ]}
                    onPress={() => goToAgendamentoLixo()}
                >
                    <Text style={styles.HomeOptinsText}>Agendamento da coleta de lixo</Text>
                </TouchableOpacity>

            </View> 
            <View style={styles.body}>
                    <TouchableOpacity
                        style={[
                            styles.HomeOptions, { backgroundColor: "#8a1a30" }
                        ]}
                        onPress={() => goToEmitirAviso()}
                    >
                        <Text style={styles.HomeOptinsText}>Emitir aviso</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.HomeOptions, { backgroundColor: "#b0b0b0" }
                        ]}
                        onPress={() => goToCadastrados()}
                    >
                        <Text style={styles.HomeOptinsText}>Cadastrados</Text>
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
        fontSize: "20px"
    }

});
