import { Text, TextInput, View, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { UtilsContext } from './Context';
import { useState, useContext } from 'react';
import LoginInput from './LoginInput';
import axios from 'axios';

export default function Login(props)
{
    const[ email, setEmail ] = useState("");
    const[ senha, setSenha ] = useState("");
    const{ utils, setUtils } = useContext(UtilsContext);

    

    function goToUsers()
    {
        props.navigation.navigate("Usuarios");
    }

    async function login()
    {
        if (email == "" || senha == "")
        {
            console.log("User or password cant be empty")
            alert('User or password cant be empty', 'User or password cant be empty', []);
        }
        else
        {
            const response = await axios.get("http://localhost:8080/user/" + email, {
            });

            if(response.data == "")
            {
                console.log("Email not found");
                alert('Email not found', '', []);
            }

            else if(email == response.data.email && senha == response.data.password)
            {
                setUtils({
                    email: email,
                    name: response.data.name,
                    isAdm: response.data.isAdm,
                    // password: response.data.password,
                    id : response.data.id
                });
                props.navigation.navigate('Home');
            }
            else
            {
                console.log("Incorrect password");
                alert('Incorrect password', '', []);

            }

        }    
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.bigText}>Condomínio</Text>
            <LoginInput setEmail={setEmail} setSenha={setSenha} goToUsers={goToUsers} login={login}/>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      widht: 100,
      backgroundColor: 'lightblue',
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
        borderRadius: "100px",
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
