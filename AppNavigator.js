// AppNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login"; 
import Cadastro from "./Cadastro";
import Cardapio from "./Cardapio";
import Pagamento from "./Pagamento"; // Verifique se o caminho está correto
import pixTela from "./pixTela";
import AcompanheSeuPedido from './AcompanheSeuPedido';

const Stack = createStackNavigator();

const AppNavigator = () => {
  console.log("AppNavigator renderizado"); // Verifica se está renderizando
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={Login} 
      />
      <Stack.Screen 
        name="Cadastro" 
        component={Cadastro} 
      />
      <Stack.Screen 
        name="Cardapio" 
        component={Cardapio} 
      />
      <Stack.Screen 
        name="Pagamento" 
        component={Pagamento} 
      />
      <Stack.Screen 
        name="pixTela" 
        component={pixTela} // Adiciona a tela do QR Code
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="AcompanheSeuPedido" 
        component={AcompanheSeuPedido} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
