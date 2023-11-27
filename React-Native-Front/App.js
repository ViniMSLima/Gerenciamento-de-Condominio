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
import PagamentoCondominio from './pagamentoCondominio';
import AgendamentoLixo from './AgendamentoLixo';
import EmitirAviso from './EmitirAvisos';
import Avisos from './Avisos';
import Cadastrados from './Cadastrados';
import Churras from './AluguelChurras';
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
          <Stack.Screen name = "PagamentoCondominio" options={{ headerShown: false}} component = { PagamentoCondominio }/>
          <Stack.Screen name = "AgendamentoLixo" options={{ headerShown: false}} component = { AgendamentoLixo }/>
          <Stack.Screen name = "CadastroFunc" options={{ headerShown: false}} component = { CadastroFunc }/>
          <Stack.Screen name = "EmitirAviso" options={{ headerShown: false}} component = { EmitirAviso }/>
          <Stack.Screen name = "Avisos" options={{ headerShown: false}} component = { Avisos }/>
          <Stack.Screen name = "Cadastrados" options={{ headerShown: false}} component = { Cadastrados }/>
          <Stack.Screen name = "Churras" options={{ headerShown: false}} component = { Churras }/>
          <Stack.Screen name = "Home" options={{ headerShown: false, title: 'Home'}} component = { Home }/>
          <Stack.Screen name = "Profile" options={{ headerShown: false, title: 'Profile'}} component = { Profile } />
          <Stack.Screen name = "Usuarios" component = { Usuarios }/>
        </Stack.Navigator>
      </UtilsContext.Provider>
    </NavigationContainer>
  )
    
}
