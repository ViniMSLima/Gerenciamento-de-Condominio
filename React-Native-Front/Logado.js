import { Text, View, StyleSheet, FlatList } from "react-native";
import { UtilsContext } from './Context';
import { useState, useContext } from 'react';

export default function Usuarios(props)
{
    const{ utils, setUtils } = useContext(UtilsContext);
    console.log(utils);

    return (
        <View style={styles.container}>
        
            <Text style={styles.bigText}>Usuarios</Text>
            
            <View style={{width: "300px", height:"200px", borderRadius: "10px", borderStyle: "dashed", borderWidth: "2px"}}>
                <Text style={{marginBottom: "5px", marginLeft: "5px", marginTop:"5px"}}> LOGADO!!!</Text>
            </View>
                
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
