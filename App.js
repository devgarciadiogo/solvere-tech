import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function app(){
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
 
  //Converter a matricula para inteiro
  const emailCompleto=()=>{
    setEmail(parseInt(email))
  }
  
  return (
    <View style={styles.container}>
      <Text style = {styles.display}>Solvere Tech</Text>
      
      <Image style = {styles.imagem}
        resizeMode = 'stretch'
        source={require('./imagens/modelo-de-vetor-de-design-de-logotipo-de-entrega-expressa_441059-205.png')}
      />

      <Text style = {styles.display1}>Faça seu Login!</Text>

      
      <Text style = {styles.display2}>Email</Text>
      
      <TextInput
        style = {styles.email}
        value = {String(email)}
        onChangeText = {(texto) => (setEmail(texto))}
        keyboardType='email-address'
        placeholder='Insira seu email aqui!'
      />

      <Text style = {styles.display3}> Senha </Text>
      <TextInput
        style = {styles.senha}
        value = {String(senha)}
        onChangeText = {(texto) => (setSenha(texto))}
        secureTextEntry={true}
        placeholder='Insira sua senha aqui!'
      />

      <Text style={styles.cadastroText}>Não tem conta? Faça seu cadastro</Text>


      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          // Lógica para lidar com o login
          console.log('Botão Logar pressionado');
        }}
      >
        <Text style={styles.loginButtonText}>Logar</Text>
      </TouchableOpacity>

      <StatusBar style = "auto" />
      <ScrollView style = {styles.ScrollView} >
<Text style={styles.text}>
  O aplicativo de delivery é uma plataforma projetada para conectar clientes a uma variedade de opções de entrega de alimentos e produtos. Ele integra diversas funcionalidades para facilitar a experiência de compra e entrega. Os usuários podem explorar menus de diferentes restaurantes e lojas, fazer pedidos e acompanhar o status das entregas em tempo real.
  O aplicativo oferece uma interface intuitiva onde os clientes podem visualizar detalhes dos produtos, selecionar opções personalizadas, e escolher horários de entrega. Além disso, ele permite o rastreamento da entrega desde a preparação até a chegada ao destino, proporcionando total transparência no processo.
  ----------------------------
  Com a integração de sistemas de pagamento seguros, o aplicativo garante que todas as transações sejam realizadas de forma confiável e eficiente. A plataforma também suporta a comunicação direta entre o cliente e o entregador, possibilitando atualizações e ajustes rápidos no pedido.
  A experiência do usuário é otimizada através de um design responsivo e acessível, adaptando-se a diferentes tamanhos de tela e dispositivos. O aplicativo é projetado para oferecer uma navegação fluida, com acesso fácil às principais funcionalidades e informações necessárias para uma experiência de compra satisfatória.
  ----------------------------
  O aplicativo de delivery é uma plataforma projetada para conectar clientes a uma variedade de opções de entrega de alimentos e produtos. Ele integra diversas funcionalidades para facilitar a experiência de compra e entrega. Os usuários podem explorar menus de diferentes restaurantes e lojas, fazer pedidos e acompanhar o status das entregas em tempo real.
  O aplicativo oferece uma interface intuitiva onde os clientes podem visualizar detalhes dos produtos, selecionar opções personalizadas, e escolher horários de entrega. Além disso, ele permite o rastreamento da entrega desde a preparação até a chegada ao destino, proporcionando total transparência no processo.
  ----------------------------
  Com a integração de sistemas de pagamento seguros, o aplicativo garante que todas as transações sejam realizadas de forma confiável e eficiente. A plataforma também suporta a comunicação direta entre o cliente e o entregador, possibilitando atualizações e ajustes rápidos no pedido.
  A experiência do usuário é otimizada através de um design responsivo e acessível, adaptando-se a diferentes tamanhos de tela e dispositivos. O aplicativo é projetado para oferecer uma navegação fluida, com acesso fácil às principais funcionalidades e informações necessárias para uma experiência de compra satisfatória.
  ----------------------------
  O aplicativo de delivery é uma plataforma projetada para conectar clientes a uma variedade de opções de entrega de alimentos e produtos. Ele integra diversas   funcionalidades para facilitar a experiência de compra e entrega. Os usuários podem explorar menus de diferentes restaurantes e lojas, fazer pedidos e acompanhar o status das entregas em tempo real.
  O aplicativo oferece uma interface intuitiva onde os clientes podem visualizar detalhes dos produtos, selecionar opções personalizadas, e escolher horários de entrega. Além disso, ele permite o rastreamento da entrega desde a preparação até a chegada ao destino, proporcionando total transparência no processo.
  ----------------------------
  Com a integração de sistemas de pagamento seguros, o aplicativo garante que todas as transações sejam realizadas de forma confiável e eficiente. A plataforma também suporta a comunicação direta entre o cliente e o entregador, possibilitando atualizações e ajustes rápidos no pedido.
  A experiência do usuário é otimizada através de um design responsivo e acessível, adaptando-se a diferentes tamanhos de tela e dispositivos. O aplicativo é projetado para oferecer uma navegação fluida, com acesso fácil às principais funcionalidades e informações necessárias para uma experiência de compra satisfatória.
  ----------------------------
  O aplicativo de delivery é uma plataforma projetada para conectar clientes a uma variedade de opções de entrega de alimentos e produtos. Ele integra diversas funcionalidades para facilitar a experiência de compra e entrega. Os usuários podem explorar menus de diferentes restaurantes e lojas, fazer pedidos e acompanhar o status das entregas em tempo real.
</Text>
</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8343', //Altera a cor do background
    marginTop: 20, //Margem do topo dor container para a tela
  },
  display: {
    margin: 5, //Margem superior do texto
    marginleft: 20, //Margem esquerda do texto
    fontSize: 20, //Tamanho da fonte
    textAlign: 'center', //Centraliza o texto
  },
  display1: {//Segunda linha de texto
    marginleft: 60, //Margem esquerda do texto
    fontSize: 18,
    textAlign: 'center', //Centraliza o texto
  },
  display2: { //Label para email
    margin: 5,
    marginLeft: 10, //Margem esquerda do texto
    fontSize: 18,
  },
  display3: { //Label para senha
    margin: 5,
    marginLeft: 10, //Margem esquerda do texto
    fontSize: 18,
  },
  email: { //Caixa de texto para email
    marginTop: 2, //Margem da caixa de entrada para o label email
    width: 370,  //Largura da caixa de entrada 
    height: 20, //Altura da caixa de entrada
    backgroundColor: '#FFF',
    borderEndWidth: 1,
    marginLeft: 10, //Margem esquerda do texto
    padding: 2, //Espaço para a entrada de dados e a borda
    placeholderTextColor: 'rgba(0, 0, 0, 0.5)',
  },
  senha: { //Caixa de texto para senha
    backgroundColor: '#FFF',
    borderEndWidth: 1,
    marginLeft: 10, //Margem esquerda do texto
    marginTop: 2, //Margem da primeira caixa de entrada para segunda
    padding: 2, //Espaço entra a entrada de dados e a borda
    width: 370, //Aumente a largura da caixa de entrada
    placeholderTextColor: 'rgba(0, 0, 0, 0.5)',
  },
  imagem: { // Configurações para a imagem
    width: 170, //Largura
    height: 200, //Altura
    marginTop: 5, //Margem da figura no topo para elemento anterior, caixa de entrada
    alignSelf: 'Center'
  },
  loginButton:{
    backgroundColor: '#FF8343',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 0,
    width: 100,
    alignSelf: 'center',
  },
  loginButtonText: {
    color: '#000',
    fontSize: 16,
  },  
  cadastroText: {
    color: '#FFF', // Cor do texto
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 10, // Margem vertical para espaçamento
  },
  text:{
    margin: 5,
    marginBottom: 20,
    fontSize: 14,
  }
});
