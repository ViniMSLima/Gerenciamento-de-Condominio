import { StatusBar } from 'expo-status-bar';
import { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './Login';
import Cadastro from './Cadastro';
import Usuarios from './Usuarios';
import Home from './Home';
import CadastroApe from './CadastroApartamentos';
import CadastroFunc from './CadastroFuncionarios';
import Profile from './Profile';
import { UtilsContext } from './Context'


export default function App() {
  const [ utils, setUtils ] = useState({});
  const Stack = createStackNavigator()

  return(
    <NavigationContainer>
      <UtilsContext.Provider value={{ utils, setUtils }}>
        <Stack.Navigator>
          <Stack.Screen name = "Login" options={{ headerShown: false, title: 'Login'}} component = { Login } />
          <Stack.Screen name = "Cadastro" options={{ headerShown: false}} component = { Cadastro }/>
          <Stack.Screen name = "CadastroApe" options={{ headerShown: false}} component = { CadastroApe }/>
          <Stack.Screen name = "CadastroFunc" options={{ headerShown: false}} component = { CadastroFunc }/>
          <Stack.Screen name = "Home" options={{ headerShown: false, title: 'Home'}} component = { Home }/>
          <Stack.Screen name = "Profile" options={{ headerShown: false, title: 'Profile'}} component = { Profile } />
          <Stack.Screen name = "Usuarios" component = { Usuarios }/>
        </Stack.Navigator>
      </UtilsContext.Provider>
    </NavigationContainer>
  )
    
}
