// AppNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login"; 
import Cadastro from "./Cadastro";
import Cardapio from "./Cardapio";
import Pagamento from "./Pagamento"; // Atualiza para usar Pagamento.js

const Stack = createStackNavigator();

const AppNavigator = () => {
  console.log("AppNavigator renderizado"); // Verifica se está renderizando
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }} // Opcional: esconde o cabeçalho
      />
      <Stack.Screen 
        name="Cadastro" 
        component={Cadastro} 
        options={{ headerShown: false }} // Opcional: esconde o cabeçalho
      />
      <Stack.Screen 
        name="Cardapio" 
        component={Cardapio} 
        options={{ headerShown: false }} // Opcional: esconde o cabeçalho
      />
      <Stack.Screen 
        name="Pagamento" 
        component={Pagamento} 
        options={{ headerShown: false }} // Opcional: esconde o cabeçalho
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
