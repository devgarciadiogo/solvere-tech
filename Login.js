import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
    try {
      const response = await axios.post("http://192.168.0.129:3000/login", {
        email,
        senha,
      });

      console.log("Resposta da API:", response.data);

      if (response.data.success) {
        Alert.alert("Login bem-sucedido!", response.data.message);
        if (response.data.userId) {
          await AsyncStorage.setItem("userId", String(response.data.userId));
          console.log("User ID saved:", response.data.userId);
        } else {
          console.warn("userId não encontrado na resposta");
        }
        navigation.navigate("Cardapio");
      } else {
        Alert.alert("Erro", response.data.message);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);

      // Verifique a estrutura do erro
      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Dados do erro:", error.response.data);
      }

      const errorMessage = error.response?.data?.message || "Erro desconhecido";

      // Alert para login não encontrado
      if (errorMessage === "Usuário não encontrado") {
        Alert.alert(
          "Erro",
          "Login não encontrado. Por favor, faça seu cadastro."
        );
      } else {
        Alert.alert(
          "Erro",
          "Não foi possível realizar o login. Tente novamente mais tarde."
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        resizeMode="stretch"
        source={require("./imagens/Logotipo.png")}
      />

      <Text style={styles.display1}>FAÇA SEU LOGIN</Text>

      <Text style={styles.display2}>EMAIL</Text>
      <TextInput
        style={styles.email}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        placeholder="Insira seu email aqui!"
      />

      <Text style={styles.display3}>SENHA</Text>
      <TextInput
        style={styles.senha}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
        placeholder="Insira sua senha aqui!"
      />

      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Text style={styles.cadastroText}>
          Não tem conta? Faça seu cadastro
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>LOGAR</Text>
      </TouchableOpacity>

      <Image
        style={styles.imagemLogo}
        resizeMode="stretch"
        source={require("./imagens/SOLVERE TECH.png")}
      />

      <Text style={styles.copy}>
        {" "}
        © 2024 Solvere Tech. Todos os direitos reservados.{" "}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA27F",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  display1: {
    marginVertical: 20,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  display2: {
    margin: 5,
    marginLeft: 20,
    fontSize: 22,
    fontWeight: "bold",
  },
  display3: {
    margin: 5,
    marginLeft: 20,
    fontSize: 22,
    fontWeight: "bold",
  },
  email: {
    marginVertical: 10,
    marginLeft: 20,
    width: 370,
    height: 40,
    backgroundColor: "#FFF",
    padding: 10,
    placeholderTextColor: "rgba(0, 0, 0, 0.5)",
    borderColor: "#FF0000",
    borderWidth: 1,
    borderRadius: 5,
  },
  senha: {
    marginVertical: 10,
    marginLeft: 20,
    width: 370,
    height: 40,
    backgroundColor: "#FFF",
    padding: 10,
    placeholderTextColor: "rgba(0, 0, 0, 0.5)",
    borderColor: "#FF0000",
    borderWidth: 1,
    borderRadius: 5,
  },
  imagem: {
    width: 200,
    height: 200,
    marginVertical: 20,
    alignSelf: "center",
  },
  loginButton: {
    backgroundColor: "#FF6969",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 20,
    width: 200,
    alignSelf: "center",
    borderColor: "#FF0000",
    borderWidth: 1,
  },
  loginButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  cadastroText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    marginVertical: 10,
  },
  imagemLogo: {
    width: 90,
    height: 90,
    alignSelf: "center",
  },
  copy: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 15,
  },
});
