import { Text, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default class LoginInput extends React.Component { 
    render() {
      return (
        <View>
            <Text style={styles.smallText}>Email</Text>
            <TextInput
                style={styles.inputs} 
                onChangeText={text => this.props.setEmail(text)} 
                placeholder= " user@example.com"
            ></TextInput>

            <Text style={styles.smallText}>Password</Text>
            <TextInput  
                style={styles.inputs}
                onChangeText={text => this.props.setSenha(text)} 
                secureTextEntry = {true}
                placeholder= " your_password"
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
        width: "300px",
        marginBottom: "20px",
        height: "30px",
        borderRadius: "100px",
        marginTop: "5px",
        borderColor: "grey",
        borderWidth: "1px",
        border: "none"
    },
    TouchableOpacity: {
        width: "300px",
        height: "30px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        fontFamily: "Arial",
        marginTop: "30px"
        
    }

});
