import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Pagamento = ({ navigation }) => {
  const handlePayment = (pagamentoMethod) => {
    // Lógica para processar o pagamento (se necessário)
    console.log(`Método de pagamento escolhido: ${pagamentoMethod}`);
    // Navegar de volta ao carrinho ou para a tela de confirmação, se aplicável
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha a forma de pagamento</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => handlePayment('Dinheiro')}
      >
        <Text style={styles.buttonText}>Dinheiro na entrega</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => handlePayment('Pix')}
      >
        <Text style={styles.buttonText}>Pix</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Voltar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFA27F',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  backButton: {
    marginTop: 20,
  },
  backButtonText: {
    fontSize: 16,
    color: '#FFA27F',
  },
});

export default Pagamento;
