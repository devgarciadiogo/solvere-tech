import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';

export default function app(){
  const [matricula, setMatricula] = useState(0)
  const [nome, setNome] = useState("")
 
  //Converter a matricula para inteiro
  const matInteira=()=>{
    setMatricula(parseInt(matricula))
  }
  
  return (
    <View style={styles.container}>
      <Text style = {styles.display}>Solvere Tech</Text>
      <Text style = {styles.display1}>ENTRADA DE DADOS - TextInput</Text>
      <Text style = {styles.display}>Matricula</Text>
      
      <TextInput
        style = {styles.matricula}
        value = {String(matricula)}
        onChangeText = {(texto) => (setMatricula(texto))}
      />

      <Text style = {styles.display}> Nome </Text>
      <TextInput
        style = {styles.nome}
        value = {String(nome)}
        onChangeText = {(texto) => (setNome(texto))}
      />
      
      <Image style = {styles.imagem}
        resizeMode = 'stretch'
        source={require('./imagens/pinguins-fofos_660634-675.jpg')}
      />
      <StatusBar style = "auto" />
      <ScrollView style = {styles.ScrollView} >
<Text style={styles.text}>
  ScrollView é o componente que envolve a plataforma ScrollView enquanto fornece 
  integração com o sistema "responder" de bloqueio 
  de toque.
  Lembre-se de que ScrollViews devem ter uma altura limitada para funcionar, pois 
  contêm filhos de altura ilimitada em um 
  contêiner limitado - por meio de uma interação de rolagem. Para limitar a altura de 
  um ScrollView, defina a altura da exibição 
  diretamente - desencorajado - ou certifique-se de que todas as exibições pai tenham 
  altura limitada. 
  ----------------------------
  ScrollView renderiza todos os seus componentes filho de reação de uma só vez, mas 
  isso tem uma desvantagem de desempenho.
  Imagine que você tem uma lista muito longa de itens que deseja exibir, talvez várias 
  telas de conteúdo. A criação de 
  componentes JS e visualizações nativas para tudo de uma vez, muitos dos quais podem 
  nem ser exibidos, contribuirá para 
  uma renderização lenta e maior uso de memória.
  ----------------------------
  ScrollView é o componente que envolve a plataforma ScrollView enquanto fornece 
  integração com o sistema "responder" de bloqueio 
  de toque.
  Lembre-se de que ScrollViews devem ter uma altura limitada para funcionar, pois 
  contêm filhos de altura ilimitada em um 
  contêiner limitado - por meio de uma interação de rolagem. Para limitar a altura de 
  um ScrollView, defina a altura da exibição 
  diretamente - desencorajado - ou certifique-se de que todas as exibições pai tenham 
  altura limitada. 
  ----------------------------
  ScrollView renderiza todos os seus componentes filho de reação de uma só vez, mas 
  isso tem uma desvantagem de desempenho.
  Imagine que você tem uma lista muito longa de itens que deseja exibir, talvez várias 
  telas de conteúdo. A criação de 
  componentes JS e visualizações nativas para tudo de uma vez, muitos dos quais podem 
  nem ser exibidos, contribuirá para 
  uma renderização lenta e maior uso de memória.
  ----------------------------
  ScrollView renderiza todos os seus componentes filho de reação de uma só vez, mas 
  isso tem uma desvantagem de desempenho.
  Imagine que você tem uma lista muito longa de itens que deseja exibir, talvez várias 
  telas de conteúdo. A criação de 
  componentes JS e visualizações nativas para tudo de uma vez, muitos dos quais podem 
  nem ser exibidos, contribuirá para 
  uma renderização lenta e maior uso de memória.
</Text>
</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa', //Altera a cor do background
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
  display2: { //Label para matricula
    marginLeft: 10, //Margem esquerda do texto
  },
  display3: { //Label para nome
    margin: 5,
    marginLeft: 10 //Margem esquerda do texto
  },
  matricula: { //Caixa de texto para matricula
    marginTop: 2, //Margem da caixa de entrada para o label matricula
    width: 370,  //Largura da caixa de entrada 
    height: 20, //Altura da caixa de entrada
    backgroundColor: '#FFF',
    borderEndWidth: 1,
    marginLeft: 10, //Margem esquerda do texto
    padding: 2, //Espaço para a entrada de dados e a borda
  },
  nome: { //Caixa de texto para nome
    backgroundColor: '#FFF',
    borderEndWidth: 1,
    marginLeft: 10, //Margem esquerda do texto
    marginTop: 2, //Margem da primeira caixa de entrada para segunda
    padding: 2, //Espaço entra a entrada de dados e a borda
    width: 370, //Aumente a largura da caixa de entrada
  },
  imagem: { // Configurações para a imagem
    width: 170, //Largura
    height: 200, //Altura
    marginLeft: 90, //Margem Esquerda 
    marginTop: 10, //Margem da figura no topo para elemento anterior, caixa de entrada
  },
});
