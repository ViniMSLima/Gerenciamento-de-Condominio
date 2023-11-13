import { Text, Button, TextInput, View, StyleSheet, TouchableOpacity, Image, Switch} from "react-native";
import { useState, useContext } from 'react';
import { UtilsContext } from './Context';
import axios from 'axios';

export default function Login(props)
{
    const [ inicio, setInicio ] = useState(false);
    const { utils, setUtils } = useContext(UtilsContext);

    const [ nome, setNome ] = useState("");
    const [ idade, setIdade ] = useState("");
    const [ sexo, setSexo ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ senha, setSenha ] = useState("");

    let arrayUtils = [];

    async function cadastro()
    {
        if(utils.data){
            arrayUtils = [...utils.data];
        }
        
        arrayUtils.push({nome, idade, sexo, email, senha});
        setUtils({...utils, data:arrayUtils});

        try {
            const response = await axios.post("http://localhost:8080/user", {
                "name": nome,
                "age": idade,
                "sex": sexo,
                "email": email,
                "password": senha
            });
            
            console.log('Resposta da API PostUser:', response);
        } catch (error) {
            console.error('Erro ao enviar o user:', error);
        }
        
        props.navigation.navigate('Usuarios');
    }

    
    async function GetUser()
    {

        try {
            const response = await axios.get("http://localhost:8080/user");
            
            console.log('Resposta do API GetUser:', response);
        } catch (error) {
            console.error('Erro ao pegar o user:', error);
        }
    }

    async function PostUser()
    {

        try {
            const response = await axios.post("http://localhost:8080/user", {
                "name": "AAAAAAAAAAAAAAAAAA",
                "age": 18
            });
            
            console.log('Resposta da API PostUser:', response);
        } catch (error) {
            console.error('Erro ao enviar o user:', error);
        }
    }

    // async function denis()
    // {
    //     await PostUser();
    //     await GetUser();
    // }

    // denis();

    return (
        <View style={styles.container}>
        
            <Image style={{width: "150px", height: "150px", borderRadius: "50%", marginBottom: "30px", marginTop: "30px"}} source={require("./img/1053244.png")}></Image>

            <Text style={styles.smallText}>Nome:</Text>
            <TextInput style={styles.inputs} onChangeText={text => setNome(text)}
            ></TextInput>

            <View style={{justifyContent: "space-between", display: "flex", flexDirection: "row"}}>
                <View><Text>Idade:</Text>
                    <TextInput onChangeText={text => setIdade(text)} style={[styles.smallInput, {marginRight: "10px"}]}
                    ></TextInput>
                </View>
                <View>
                    <Text>Sexo:</Text>
                    <TextInput onChangeText={text => setSexo(text)} style={styles.smallInput}
                    ></TextInput>
                </View>
            </View>

            <Text style={styles.smallText}>Email:</Text>
            <TextInput 
                onChangeText={text => setEmail(text)} 
                style={styles.inputs}
            ></TextInput>

            <Text style={styles.smallText}>Senha:</Text>
            <TextInput 
                onChangeText={text => setSenha(text)}
                style={styles.inputs}
                secureTextEntry = {true}
            ></TextInput>

            <Text style={styles.smallText}>Confirmar senha:</Text>
            <TextInput style={styles.inputs}
                secureTextEntry = {true}
            ></TextInput>

            <View style={{width: "200px"}}>
                <Text style={styles.smallText}>Deseja receber notificacoes?</Text>
                <Switch style={{marginTop: "10px"}}
                        onValueChange={() => setInicio(!inicio)}
                        value={inicio}
                        trackColor={{false: "#767577", true: "#81b0ff"}}
                        thumbColor={inicio? "#f5dd4b":"#f4f3f4"}
                />
            </View>
            
            <TouchableOpacity style={[styles.TouchableOpacity, {backgroundColor: "white", color: "black"}]} 
            onPress={() => cadastro()}><Text>Cadastrar</Text></TouchableOpacity>

            <TouchableOpacity style={[styles.TouchableOpacity, {backgroundColor: "lightgrey", color: "white"}]}
            onPress={() => props.navigation.navigate("Login")}><Text>Cancelar</Text></TouchableOpacity>

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
        marginTop: "5px"
    },
    smallInput:{
        backgroundColor: "white",
        width: "95px",
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
        width: "200px",
        height: "30px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        fontFamily: "Arial",
        marginTop: "30px"
    }

});
