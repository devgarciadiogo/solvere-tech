import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const Pagamento = ({ navigation }) => {
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [complemento, setComplemento] = useState('');
  const [metodoPagamento, setMetodoPagamento] = useState(''); // Estado para armazenar o método de pagamento

  const handlePayment = (pagamentoMethod) => {
    setMetodoPagamento(pagamentoMethod); // Armazena o método de pagamento escolhido
    alert(`Método de pagamento escolhido: ${pagamentoMethod}`);
    
    if (pagamentoMethod === 'Pix') {
        navigation.navigate('QRCodeScreen'); // Navega para a tela do QR Code
    }
};

  const handleConfirmOrder = () => {
    alert(`Pedido confirmado!\nEndereço: ${rua}, ${numero}, ${bairro}, ${cidade}, ${complemento}\nMétodo de Pagamento: ${metodoPagamento}`);
    navigation.navigate('PaginaDeEspera'); // Substitua pelo nome da sua tela de espera
  };

  const handleSubmit = () => {
    alert(`Endereço enviado:\nRua: ${rua}\nNúmero: ${numero}\nBairro: ${bairro}\nCidade: ${cidade}\nComplemento: ${complemento}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ENDEREÇO DE ENTREGA</Text>

      <TextInput
        style={styles.input}
        placeholder="Rua"
        value={rua}
        onChangeText={setRua}
      />
      <TextInput
        style={styles.input}
        placeholder="Número"
        value={numero}
        onChangeText={setNumero}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Bairro"
        value={bairro}
        onChangeText={setBairro}
      />
      <TextInput
        style={styles.input}
        placeholder="Cidade"
        value={cidade}
        onChangeText={setCidade}
      />
      <TextInput
        style={styles.input}
        placeholder="Complemento"
        value={complemento}
        onChangeText={setComplemento}
      />

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>ENVIAR ENDEREÇO</Text>
      </TouchableOpacity>

      <Text style={styles.title}>ESCOLHA A FORMA DE PAGAMENTO</Text>

      <TouchableOpacity style={styles.button} onPress={() => handlePayment('Dinheiro')}>
        <Image source={require('./imagens/dinheiro.png')} style={styles.image} />
        <Text style={[styles.buttonText, { marginLeft: 15 }]}>DINHEIRO</Text> {/* Adicionado marginLeft aqui */}
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => handlePayment('Pix')}>
        <Image source={require('./imagens/pix.png')} style={styles.image} />
        <Text style={[styles.buttonText, { marginLeft: 15 }]}>PIX</Text> {/* Adicionado marginLeft aqui */}
      </TouchableOpacity>

      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmOrder}>
        <Text style={styles.buttonText}>CONFIRMAR PEDIDO</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA27F',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#FF6969',
    borderWidth: 2, // Aumentar a largura da borda
    borderRadius: 10, // Borda arredondada
    paddingHorizontal: 15,
    marginBottom: 15,
    width: '100%',
    backgroundColor: '#FFFFFF', // Fundo branco para os inputs
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2, // Sombras para Android
  },
  button: {
    backgroundColor: '#6EC207',
    borderWidth: 1,
    borderColor: '#0056b3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
    alignSelf: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
  },
  submitButton: {
    backgroundColor: '#FF6969',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    width: '70%',
    alignSelf: 'center',
  },
  confirmButton: {
    backgroundColor: '#FF6969', // Cor do botão de confirmar pedido
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    width: '70%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default Pagamento;
