import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

export default function Login({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Esconde o cabeçalho da tela
    });
  }, [navigation]);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.1.4:3000/login', {
        email,
        senha,
      });

      if (response.data.success) {
        Alert.alert('Login bem-sucedido!', response.data.message);
        // Navega para a tela de cardápio
        navigation.navigate('Cardapio');
      } else {
        Alert.alert('Erro', response.data.message);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      Alert.alert('Erro', 'Não foi possível realizar o login. Tente novamente mais tarde.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        resizeMode='stretch'
        source={require('./imagens/Logotipo.png')}
      />

      <Text style={styles.display1}>FAÇA SEU LOGIN</Text>

      <Text style={styles.display2}>EMAIL</Text>

      <TextInput
        style={styles.email}
        value={email}
        onChangeText={setEmail}
        keyboardType='email-address'
        placeholder='Insira seu email aqui!'
      />

      <Text style={styles.display3}>SENHA</Text>
      <TextInput
        style={styles.senha}
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={true}
        placeholder='Insira sua senha aqui!'
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('Cadastro')} // Navega para a tela de cadastro
      >
        <Text style={styles.cadastroText}>Não tem conta? Faça seu cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin} // Chama a função de login
      >
        <Text style={styles.loginButtonText}>LOGAR</Text>
      </TouchableOpacity>

      <Image
        style={styles.imagemLogo}
        resizeMode='stretch'
        source={require('./imagens/SOLVERE TECH.png')}
      />

      <Text style={styles.copy}> © 2024 Solvere Tech. Todos os direitos reservados. </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA27F', //Altera a cor do background
    marginTop: 20,
    justifyContent: 'space-between',
  },
  display1: {//Segunda linha de texto
    marginLeft: 10, //Margem esquerda do texto
    marginVertical: 20, // Adiciona mais espaço acima e abaixo do texto
    fontSize: 25,
    textAlign: 'center', //Centraliza o texto
    fontWeight: 'bold',
  },
  display2: { //Label para email
    margin: 5,
    marginLeft: 20, //Margem esquerda do texto
    fontSize: 22,
    fontWeight: 'bold',
  },
  display3: { //Label para senha
    margin: 5,
    marginLeft: 20, //Margem esquerda do texto
    fontSize: 22,
    fontWeight: 'bold',
  },
  email: { //Caixa de texto para email
    marginVertical: 10,
    marginTop: 2, //Margem da caixa de entrada para o label email
    width: 370,  //Largura da caixa de entrada 
    height: 40, //Altura da caixa de entrada
    backgroundColor: '#FFF',
    borderEndWidth: 1,
    marginLeft: 20, //Margem esquerda do texto
    padding: 2, //Espaço para a entrada de dados e a borda
    paddingLeft: 10,
    placeholderTextColor: 'rgba(0, 0, 0, 0.5)',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: '#FF0000', // Cor da borda
    borderWidth: 1, // Largura da borda
  },
  senha: { //Caixa de texto para senha
    marginVertical: 10,
    backgroundColor: '#FFF',
    height: 40,
    borderEndWidth: 1,
    marginLeft: 20, //Margem esquerda do texto
    marginTop: 2, //Margem da primeira caixa de entrada para segunda
    padding: 2, //Espaço entra a entrada de dados e a borda
    paddingLeft: 10,
    width: 370, //Aumente a largura da caixa de entrada
    placeholderTextColor: 'rgba(0, 0, 0, 0.5)',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: '#FF0000', // Cor da borda
    borderWidth: 1, // Largura da borda
  },
  imagem: { // Configurações para a imagem
    width: 200, //Largura
    height: 200, //Altura
    marginVertical: 20,
    marginTop: 5, //Margem da figura no topo para elemento anterior, caixa de entrada
    alignSelf: 'center',
    marginLeft: -10,
  },
  loginButton: {
    backgroundColor: '#FF6969',
    borderWidth: 1, // Largura da borda
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
    marginTop: 20,
    width: 200,
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: '#FF0000', // Cor da borda
    borderWidth: 1, // Largura da borda
  },
  loginButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },  
  cadastroText: {
    color: '#fff', // Cor do texto
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10, // Margem vertical para espaçamento
  },
  imagemLogo:{
    width: 90, //Largura
    height: 90, //Altura
    marginVertical: 20,
    marginTop: 30, //Margem da figura no topo para elemento anterior, caixa de entrada
    alignSelf: 'center',
  },
  copy:{
    marginVertical:20,
    textAlign: 'center',
    marginTop: 40,
    fontSize: 15,
  },
  text:{
    margin: 5,
    marginBottom: 20,
    fontSize: 14,
  },
});