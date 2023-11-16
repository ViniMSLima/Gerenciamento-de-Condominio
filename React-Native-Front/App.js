import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, Image, FlatList, SectionList, Switch} from 'react-native';
import { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './Login';
import Cadastro  from './Cadastro';
import Usuarios from './Usuarios';
import Home from './Home';
import { UtilsContext } from './Context'


export default function App() {
  const [ utils, setUtils ] = useState({});
  const Stack = createStackNavigator()

  // const [senha, setSenha] = useState("rexono")
  // const [inicio, setInicio] = useState(false)
  // const array = ["numero 1", "numero 2"]
  // const array2= [{
  //   title: "main dishes",
  //   data: ['Pizza', 'Burguer'],
  // },{
  //   title: "Teste",
  //   data: ['Pizzao', 'Burguero'],
  // }]

  return(
    <NavigationContainer>
      <UtilsContext.Provider value={{ utils, setUtils }}>
        <Stack.Navigator>
          <Stack.Screen name = "Logado" options={{ headerShown: false, title: 'Home'}} component = { Home }/>
          <Stack.Screen name = "Login" options={{ headerShown: false, title: 'Login'}} component = { Login } />
          <Stack.Screen name = "Cadastro" options={{ headerShown: false}} component = { Cadastro }/>
          <Stack.Screen name = "Usuarios" component = { Usuarios }/>
        </Stack.Navigator>
      </UtilsContext.Provider>
    </NavigationContainer>
  )
    

  //  (
//     <View style={styles.container}>
//       <Switch
//         onValueChange={() => setInicio(!inicio)}
//         value={inicio}
//         trackColor={{false: "#767577", true: "#81b0ff"}}
//         thumbColor={inicio? "#f5dd4b":"#f4f3f4"}
//       />

//       <SectionList
//         sections = {array2}
//         keyExtractor={(item, index) => item+index}
//         renderItem={({item}) => (
//           <Text style={{color:"green"}}>{item}</Text>
//         )}
//         renderSectionHeader={({section: {title}}) => (
//           <Text style={{color: "red"}}>{title}</Text>
//         )}>
//       </SectionList>

//       <Text>CNPJOTO</Text>

//       <StatusBar style="auto" />

//       <TextInput
//       secureTextEntry = {true}
//       placeholder="Digite sua senha aqui pra eu te goiabar"
//       value={senha}
//       onChangeText={ e => setSenha(e)}
//       />

//       <Text>{senha}</Text>

//       <TextInput 
//         multiline
//         maxLength={40}
//         style={styles.textArea}
//         rows={5}
//         onChangeText={e => console.log('text area', e)}>
//       </TextInput>

//       <Button
//         onPress={() => console.log("SIIIIIIIIIII")}
//         title="clica ae"
//         color = "red">
//       </Button>

//       <TouchableOpacity
//         style={{ width: "200px", innerHeight: "400px", backgroundColor: "lightblue"}}
//         >
//         <Text>Da uma clicadinha ae</Text>
//       </TouchableOpacity>

//       <TouchableWithoutFeedback>
//           <View
//            style={{ width: "200px", innerHeight: "400px", backgroundColor: "aquamarine"}}
//            >

//             <Text 
//               style={{ color:"blue"}}
//               >
//               suka
//             </Text>
//           </View>
//       </TouchableWithoutFeedback>
      
//       {array.map((item) => {
//         return(
//           <Text>{item}</Text>
//         )
//       })}
//       <FlatList
//         data={array}
//         renderItem={({item}) => <Text>{item}</Text>}
//         keyExtractor={(item) => item}
//         >
//       </FlatList>

//     </View>
  // );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     widht: 100,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textArea: {
//     backgroundColor: 'lightblue',
//     color: 'white'
//   }
// });
