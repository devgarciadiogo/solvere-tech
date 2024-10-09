// AppNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login"; 
import Cadastro from "./Cadastro";
import Cardapio from "./Cardapio";
import Pagamento from "./Pagamento"; // Atualiza para usar Pagamento.js
import QRCodeScreen from "./pixTela"; // Importa a tela do QR Code

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
        name="QRCodeScreen" 
        component={QRCodeScreen} // Adiciona a tela do QR Code
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
