import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {View,StyleSheet,Text,TouchableOpacity,Image,Modal,ScrollView, FlatList} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useCart } from './CartContext'; // Altere para o caminho correto


const Cardapio = ({ navigation }) => {
  const { cart, addToCart, removeFromCart } = useCart(); 
  console.log("Conteúdo do carrinho:", cart); // Para depuração
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState("");
    
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "left",
    });
  }, [navigation]);

  // Título fixo
  const titleTextInfo = "Bistro de Lune";

  // Função para abrir o modal e definir o conteúdo
  const openModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    alert(`${item.name} foi adicionado ao carrinho!`);
    setModalVisible(false); // Fecha o modal após adicionar o item
  };

  const calculateTotal = () => {
    const total = cart.reduce((total, item) => {
        // Converte o preço para um número, removendo "R$ " e substituindo "," por "."
        const price = parseFloat(item.price.replace("R$ ", "").replace(",", "."));
        console.log(`Item: ${item.name}, Preço: ${price}`); // Para verificar se o preço está correto
        return total + (isNaN(price) ? 0 : price); // Evita NaN
    }, 0);
    console.log("Total antes do fix:", total); // Para verificar o total antes de arredondar
    return total.toFixed(2);
};

  
  return (
    <View style={styles.container}>
      <ScrollView 
      contentContainerStyle={styles.scrollViewContent} style={ styles.scrollView } showsVerticalScrollIndicator={false}>
        <Text style={styles.mainTitle}>Pratos Principais</Text>

        {/* Seção de Pratos Principais */}
        {[
          {
            id: 1,
            name: "Soupe à l'Oignon",
            price: "R$ 55,00",
            image: require("./imagens/soupe.jpg"),
          },
          {
            id: 2,
            name: "Salade de Chèvre Chaud ",
            price: "R$ 38,00",
            image: require("./imagens/salad.jpg"),
          },
          {
            id: 3,
            name: "Coq au Vin",
            price: "R$ 74,00",
            image: require("./imagens/couq.jpg"),
          },
          { 
            id: 4,
            name: "Steak Frites",
            price: "R$ 81,90",
            image: require("./imagens/steakfrites.jpg"),
          },
          { 
            id: 5,
            name: "Confit de Canard",
            price: "R$ 120,00",
            image: require("./imagens/canard.jpg"),
          },
        ].map((item, index) => (
          <TouchableOpacity style={styles.itemContainer} key={item.id} onPress={() => handleAddToCart(item)}>
            <Image style={styles.itemImage} source={item.image} />
            <View style={styles.itemTextContainer}>
              <View style={styles.textAndPrice}>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
              <Text style={styles.adicionarButtonText}>+</Text>
            </View>
          </TouchableOpacity>
        ))}

        <Text style={styles.mainTitle}>Sobremesas</Text>

        {/* Seção de Sobremesas */}
        {[
          {
            id: 6,
            name: "Paris-Brest",
            price: "R$ 65,00",
            image: require("./imagens/ParisBrest.jpg"),
          },
          {
            id: 7,
            name: "Crème Brûlée",
            price: "R$ 55,60",
            image: require("./imagens/brulee.jpg"),
          },
          {
            id: 8,
            name: "Mille-Feuille",
            price: "R$ 40,00",
            image: require("./imagens/mille.jpg"),
          },
          {
            id: 9,
            name: "Tarte Tatin",
            price: "R$ 45,00",
            image: require("./imagens/tartetatin.webp"),
          },
        ].map((item, index) => (
          <TouchableOpacity style={styles.itemContainer} key={item.id} onPress={() => handleAddToCart(item)}>
            <Image style={styles.itemImage} source={item.image} />
            <View style={styles.itemTextContainer}>
              <View style={styles.textAndPrice}>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
              <Text style={styles.adicionarButtonText}>+</Text>
            </View>
          </TouchableOpacity>
        ))}

             <Text style={styles.mainTitle}>Bebidas</Text>

        {/* Seção de bebidas */}
        {[
          {
            id: 10,
            name: "Refrigerante Lata",
            price: "R$ 8,00",
            image: require("./imagens/latarefri.jpg"),
          },
          {
            id: 11,
            name: "Refrigerante 600 ml",
            price: "R$ 16,00",
            image: require("./imagens/600mlrefri.webp"),
          },
          {
            id: 12,
            name: "Taça Vinho Bordeuax",
            price: "R$ 50,00",
            image: require("./imagens/vinhobordeaux.webp"),
          },
          {
            id: 13,
            name: "Taça Champagne Chandon",
            price: "R$ 60,00",
            image: require("./imagens/chandon.jpg"),
          },
        ].map((item, index) => (
          <TouchableOpacity style={styles.itemContainer} key={item.id} onPress={() => handleAddToCart(item)}>
            <Image style={styles.itemImage} source={item.image} />
            <View style={styles.itemTextContainer}>
              <View style={styles.textAndPrice}>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
              <Text style={styles.adicionarButtonText}>+</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.footerMenu}>
        <TouchableOpacity style={styles.menuButton} onPress={() => openModal("info")}>
          <Image source={require("./imagens/icons8-informações-50.png")} style={styles.icon} />
          <Text style={styles.menuText}>Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() =>{ 
          setModalContent("carrinho");
          setModalVisible(true);
          }}>
          <Image source={require("./imagens/icons8-carrinho-de-compras02-48.png")} style={styles.icon} />
          <Text style={styles.menuText}>Carrinho</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => openModal("perfil")}>
          <Image source={require("./imagens/icons8-male2-user-50.png")} style={styles.icon} />
          <Text style={styles.menuText}>Perfil</Text>
        </TouchableOpacity>
      </View>
{/* Modal */}
<Modal
  transparent={true}
  animationType="slide"
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
<View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      {/* Conteúdo do modal com base no botão clicado */}
      {modalContent === "carrinho" ? (
        cart.length === 0 ? (
          <Text style={styles.modalText}>Seu carrinho está vazio.</Text>
        ) : (
          <>
            <FlatList
              data={cart}
              renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                  <Text style={styles.itemText}>{item.name}</Text>
                  <Text style={styles.itemPrice}>{item.price}</Text>
                  <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                    <Text style={styles.removeButton}>Remover</Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
            <Text style={styles.totalText}>
              Total: R$ {calculateTotal()}
            </Text>
          </>
        )
      ) : modalContent === "info" ? (
        <>
          <Text style={styles.modalText}>{titleTextInfo}</Text>
          <Text style={styles.modalText}>
            Horário de Funcionamento: Terça à Domingo das 10h às 21h
          </Text>
          <View style={styles.phoneContainer}>
            <Icon name="phone-classic" size={20} color="#FFA27F" style={styles.phoneIcon} />
            <Text style={styles.modalText}> (21) 2724-5766</Text>
          </View>
          <Text style={styles.modalText}>Aceitamos as seguintes bandeiras:</Text>
          <View style={styles.imageGallery}>
            <Image source={require("./imagens/alelo.png")} style={styles.galleryImage} />
            <Image source={require("./imagens/elo.png")} style={styles.galleryImage} />
            <Image source={require("./imagens/hipercard.png")} style={styles.galleryImage} />
            <Image source={require("./imagens/visa.png")} style={styles.galleryImage} />
          </View>
        </>
      ) : modalContent === "perfil" ? (
        <Text style={styles.modalText}>Informações do seu perfil.</Text>
      ) : null}

      {/* Botão de fechar */}
      <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>Fechar</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA27F", // Altera a cor do background
    padding: 10,
    paddingBottom: 80,
    alignItems: "center",
  },
  scrollViewContent: {
    flexGrow: 1, // Garante que o conteúdo da ScrollView preencha o espaço
    padding: 10,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  pratoContainer: {
    width: "100%",
    alignItems: "center",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FF0000", // Cor da borda
    padding: 10,
    marginVertical: 10,
    width: "100%", // Ajusta o tamanho dos itens
    maxWidth: 350, // Define uma largura máxima
    shadowColor: "#000",
    shadowOffSet: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  removeButton: {
    color: "#FF0000",
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 30,
    marginRight: 10,
  },
  itemTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  textAndPrice: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
  },
  adicionarButtonText: {
    fontSize: 28,
    marginRight: 15,
    color: "#FF0000",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
    flex: 1, // Faz o texto ocupar o espaço restante
  },
  itemPrice: {
    fontWeight: 'bold',
    fontSize: 16,
    color: "#FF6347",
    marginRight: 20, // Adiciona espaço acima do preço
    marginLeft: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'right', // Ajuste o alinhamento se necessário
  },
  footerMenu: {
    position: "absolute", // ou relative se preferir
    bottom: 0,
    width: "100%",
    backgroundColor: "#FF6347",
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    borderTopColor: "#FF0000",
    paddingVertical: 15,
    // Adicione uma margem inferior se necessário
  },
  menuButton: {
    alignItems: "center",
    flex: 1,
  },
  menuText: {
    fontSize: 16,
    color: "#FFF",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fundo escuro translúcido
  },
  modalContent: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  phoneIcon: {
    marginRight: 10,
  },
  imageGallery: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
    width: "100%",
  },
  galleryImage: {
    width: "25%",
    height: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    marginTop: 15,
    alignItems: "center",
  },
  closeButton: {
    backgroundColor: "#FF6347",
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
  },
  closeButtonText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Cardapio;
