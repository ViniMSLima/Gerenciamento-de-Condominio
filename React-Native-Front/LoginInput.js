import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default class LoginInput extends React.Component { 
    render() {
      return (
        <View>
             <Text style={styles.bigText}>Login</Text>
            <Text style={styles.smallText}>User:</Text>
            <TextInput
                style={styles.inputs} 
                onChangeText={text => this.props.setEmail(text)} 
                placeholder= " email"
            ></TextInput>

            <Text style={styles.smallText}>Password:</Text>
            <TextInput  
                style={styles.inputs}
                onChangeText={text => this.props.setSenha(text)} 
                secureTextEntry = {true}
                placeholder= " password"
            ></TextInput>

            <TouchableOpacity 
                onPress={() => this.props.login()} 
                style={[
                    styles.TouchableOpacity, 
                    {backgroundColor: "white", color: "black"}
                ]}
            >
                <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[
                    styles.TouchableOpacity, {backgroundColor: "lightgrey", color: "white"}
                ]}
                onPress={() => this.props.goToCadastro()}
            >
                <Text>Cadastro</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                onPress={() => this.props.goToUsers()} 
                style={[
                    styles.TouchableOpacity, 
                    {backgroundColor: "white", color: "black"}
                ]}
            >
                <Text>Usuarios</Text>
            </TouchableOpacity>

        </View>
      );
    }
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
