import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import { UtilsContext } from './Context';
import { useState, useContext } from 'react';
import LoginInput from './LoginInput';
import axios from 'axios';

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

    async function login()
    {
        if (email == "" || senha == "")
        {
            console.log("User or password cant be empty")
        }
        else
        {
            const response = await axios.get("http://localhost:8080/user/" + email, {
            });

            if(email == response.data[0].email && senha == response.data[0].password)
            {
                setUtils({
                    email: email,
                    name: response.data[0].name,
                    isAdm: response.data[0].isAdm,
                    password: response.data[0].password,
                    id : response.data[0].id
                });
                props.navigation.navigate('Home');
            }
            else
                console.log("Incorrect password");
        }    
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.bigText}>Condomínio</Text>
            <LoginInput setEmail={setEmail} setSenha={setSenha} goToUsers={goToUsers} login={login}/>

            <TouchableOpacity 
                style={[
                    styles.TouchableOpacity, {backgroundColor: "lightgrey", color: "white"}
                ]}
                onPress={() => goToCadastro()}
            >
                <Text>Cadastro</Text>
            </TouchableOpacity>

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
        borderWidth: "0px"
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
