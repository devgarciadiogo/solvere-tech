import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Linking } from 'react-native';

const AcompanheSeuPedido = ({ navigation }) => { // Adicione a propriedade navigation
  const [modalVisible, setModalVisible] = useState(false);
  const restaurantInfo = {
    name: 'Bistro de Lune',
    phone: '(21) 968889495',
    address: 'Rua Mariz e Barros, 355 - Icaraí, Niterói - RJ, 24220-120',
  };

  // URL do Google Maps para o endereço específico
  const mapUrl = 'https://www.google.com/maps/search/?api=1&query=Rua+Mariz+e+Barros,+355+-+Icaraí,+Niterói+-+RJ,+24220-120';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ACOMPANHE SEU PEDIDO</Text>

      <View style={styles.statusContainer}>
        <Text style={styles.status}>✅ Pedido confirmado pelo restaurante</Text>
        <Text style={styles.status}>🔄 Pedido em produção</Text>
        <Text style={styles.status}>🚚 Saiu para entrega</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
        <Text style={[styles.buttonText, styles.centerText]}>VER INFORMAÇÕES DO RESTAURANTE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(mapUrl).catch((err) => console.error('An error occurred', err))}>
        <Text style={styles.buttonText}>VER NO MAPA</Text>
      </TouchableOpacity>

      {/* Botão para voltar à tela de cardápio */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cardapio')}>
        <Text style={styles.buttonText}>VOLTAR AO CARDÁPIO</Text>
      </TouchableOpacity>

      {/* Modal para informações do restaurante */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{restaurantInfo.name}</Text>
            <Text style={styles.modalText}>Telefone: {restaurantInfo.phone}</Text>
            <Text style={styles.modalText}>Endereço: {restaurantInfo.address}</Text>

            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA27F',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  statusContainer: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  status: {
    fontSize: 18,
    marginVertical: 10,
    color: '#555',
  },
  button: {
    backgroundColor: '#FF6969',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  centerText: {
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginVertical: 5,
  },
  closeButton: {
    backgroundColor: '#FF6969',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
});

export default AcompanheSeuPedido;
