import { Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { UtilsContext } from './Context';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';

export default function Profile(props) {
    const { utils, setUtils } = useContext(UtilsContext);

    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setId] = useState("");
    const [isAdm, setIsAdm] = useState("");

    const [ConfirmPassword, setConfirmPassword] = useState("");
    const [OldPassword, setOldPassword] = useState("");


    async function getUserInfo() {
        const response = await axios.get("http://localhost:8080/user/" + utils.email, {});

        setName(response.data[0].name);
        setCpf(response.data[0].cpf);
        setEmail(response.data[0].email);
        setDateOfBirth(response.data[0].dateOfBirth);
        setIsAdm(response.data[0].isAdm);
        setPassword(response.data[0].password);
        setPhone(response.data[0].phone);

    }

    async function putUserInfo() {
        

        const response = await axios.put("http://localhost:8080/user/" + utils.id,
            {
                "name": name,
                "cpf": cpf,
                "email": email,
                "phone": phone,
                "dateOfBirth": dateOfBirth,
                "password": password
            });
        console.log("response put", response)
    }

    useEffect(() => {
        getUserInfo();
    },[])

    

    return (
        <View style={styles.container}>

            <Text style={styles.bigText}>Perfil</Text>

            <Text style={styles.smallText}>User</Text>
            <TextInput style={styles.inputs} value={name} onChangeText={text => setName(text)}
            ></TextInput>

            <Text style={styles.smallText}>CPF</Text>
            <TextInput style={styles.inputs} value={cpf} onChangeText={text => setCpf(text)}
            ></TextInput>

            <Text style={styles.smallText}>Email</Text>
            <TextInput style={styles.inputs} value={email} onChangeText={text => setEmail(text)}
            ></TextInput>

            <Text style={styles.smallText}>Date of birth</Text>
            <TextInput style={styles.inputs} value={dateOfBirth} onChangeText={text => setDateOfBirth(text)}
            ></TextInput>

            <Text style={styles.smallText}>Phone</Text>
            <TextInput style={styles.inputs} value={phone} onChangeText={text => setPhone(text)}
            ></TextInput>

            {/* <Text style={styles.smallText}>Change Password</Text>
            <TextInput style={styles.inputs} value=" Change password" onChangeText={text => setNewPassword(text)}
            ></TextInput>
            <TextInput style={styles.inputs} value=" Confirm new password" onChangeText={text => setConfirmPassword(text)}
            ></TextInput>
            <TextInput style={styles.inputs} value=" Old password" onChangeText={text => setOldPassword(text)}
            ></TextInput> */}

            <TouchableOpacity
                style={[
                    styles.TouchableOpacity, { backgroundColor: "lightgrey", color: "white" }
                ]}
                onPress={() => putUserInfo()}
            >
                <Text>Update</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.TouchableOpacity, { backgroundColor: "lightgrey", color: "white" }]}
                onPress={() => props.navigation.navigate("Home")}><Text>Cancelar</Text></TouchableOpacity>

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
