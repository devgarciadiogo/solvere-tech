import React from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const QRCodeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>QR CODE PIX</Text>
      <View style={styles.qrCodePlaceholder}>
        <Image 
          source={require('./imagens/qrcodepix.png')} 
          style={styles.image} 
        />
      </View>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Pagamento')}>
        <Text style={styles.buttonText}>VOLTAR PARA CONFIRMAR PEDIDO</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA27F',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  qrCodePlaceholder: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF6969',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: '100%', // Faz com que a imagem ocupe 100% do espaço disponível
    height: '100%', // Faz com que a imagem ocupe 100% do espaço disponível
    resizeMode: 'contain', // Garante que a imagem mantenha suas proporções
  },
});

export default QRCodeScreen;
