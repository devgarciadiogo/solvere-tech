// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login'; // Renomeie seu componente para Login
import Cadastro from './Cadastro';
import Cardapio from './Cardapio'

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Cardapio" component={Cardapio} />        
      
      </Stack.Navigator>
      
    
    </NavigationContainer>
  );
}

export default AppNavigator;
