// AppNavigator.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./Login"; 
import Cadastro from "./Cadastro";
import Cardapio from "./Cardapio";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Cardapio" component={Cardapio} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
