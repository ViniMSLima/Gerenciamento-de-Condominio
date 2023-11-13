import { Text, TextInput, View, StyleSheet, TouchableOpacity, Button } from "react-native";
import { UtilsContext } from './Context';
import { useState, useContext } from 'react';
import LoginInput from './LoginInput';

export default function Login(props)
{
    const[ email, setEmail ] = useState("");
    const[ senha, setSenha ] = useState("");
    const{ utils, setUtils } = useContext(UtilsContext);

    function goToCadastro()
    {
        setUtils({...utils, email: email});
        props.navigation.navigate('Cadastro');
    }

    function goToUsers()
    {
        props.navigation.navigate("Usuarios");
    }

    function login()
    {
        {utils.data.map((item) => {
            if(item.email == email && item.senha == senha)
            {
                props.navigation.navigate('Logado'); 
            }
        })}
    }
    
    return (
        <View style={styles.container}>
            <LoginInput setEmail={setEmail} setSenha={setSenha} goToCadastro={goToCadastro} goToUsers={goToUsers} login={login}/>
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
        alignContent:"flex-start",
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
        
    }

});
