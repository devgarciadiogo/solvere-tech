import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

const Pagamento = ({ navigation }) => {
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [complemento, setComplemento] = useState("");
  const [metodoPagamento, setMetodoPagamento] = useState("");

  const handlePayment = (pagamentoMethod) => {
    setMetodoPagamento(pagamentoMethod);
    alert(`Método de pagamento escolhido: ${pagamentoMethod}`);
  };

  const handleConfirmOrder = () => {
    if (!rua || !numero || !bairro || !cidade || !metodoPagamento) {
      alert(
        "Por favor, preencha todos os campos e escolha um método de pagamento."
      );
      return;
    }

    alert(
      `Pedido confirmado!\nEndereço: ${rua}, ${numero}, ${bairro}, ${cidade}, ${complemento}\nMétodo de Pagamento: ${metodoPagamento}`
    );

    // Navega para a tela do QR Code se o método de pagamento for Pix
    if (metodoPagamento === "Pix") {
      console.log("Navegando para a tela do QR Code");
      navigation.navigate("PixTela"); // Altere para "PixTela"
    } else {
      console.log("Navegando para a tela de acompanhamento do pedido");
      navigation.navigate("AcompanheSeuPedido");
    }
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

      <Text style={styles.title}>ESCOLHA A FORMA DE PAGAMENTO</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePayment("Dinheiro")}
      >
        <Image
          source={require("./imagens/dinheiro.png")}
          style={styles.image}
        />
        <Text style={[styles.buttonText, { marginLeft: 15 }]}>DINHEIRO</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handlePayment("Pix")}
      >
        <Image source={require("./imagens/pix.png")} style={styles.image} />
        <Text style={[styles.buttonText, { marginLeft: 15 }]}>PIX</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={handleConfirmOrder}
      >
        <Text style={styles.buttonText}>CONFIRMAR PEDIDO</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA27F",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#FF6969",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    width: "100%",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  button: {
    backgroundColor: "#6EC207",
    borderWidth: 1,
    borderColor: "#0056b3",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
  },
  confirmButton: {
    backgroundColor: "#FF6969",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
    width: "70%",
    alignSelf: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default Pagamento;
