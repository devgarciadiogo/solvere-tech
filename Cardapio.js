import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, TouchableOpacity, Image, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { mdiSetCenter } from '@mdi/js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Cardapio = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState('');

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleAlign: 'left',
        });
    }, [navigation]);

    // Função para abrir o modal e definir o conteúdo
    const openModal = (content) => {
        setModalContent(content);
        setModalVisible(true);
    };

    const [titleTextInfo, setTitleText] = useState("Bistro de Lune");



    return (

        <View style={styles.container}>
            
            <TouchableOpacity style={styles.itemContainer}>
                <Image
                    style={styles.itemImage}
                    source={require('./imagens/soupe.jpg')} // Substitua com a imagem desejada
                />
                <View style={styles.itemTextContainer}>
                    <View style={styles.textAndPrice}>   
                        <Text style={styles.itemText}>Soupe à l'Oignon (Sopa de cebola gratinada)</Text>
                        <Text style={styles.itemPrice}>R$ 55,00</Text>
                    </View>
                    <Text style={styles.adicionarButtonText}>+</Text>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.itemContainer}>
                <Image
                    style={styles.itemImage}
                    source={require('./imagens/salad.jpg')} // Substitua com a imagem desejada
                />
                <View style={styles.itemTextContainer}>
                    <View style={styles.textAndPrice}>      
                        <Text style={styles.itemText}>Salade de Chèvre Chaud (Salada com queijo de cabra quente)</Text>
                        <Text style={styles.itemPrice}>R$ 38,00</Text>
                    </View>
                    <Text style={styles.adicionarButtonText}>+</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemContainer}>
                <Image
                    style={styles.itemImage}
                    source={require('./imagens/couq.jpg')} // Substitua com a imagem desejada
                />
                <View style={styles.itemTextContainer}>
                    <View style={styles.textAndPrice}>      
                        <Text style={styles.itemText}>Coq au Vin (Frango cozido no vinho tinto com cogumelos e bacon)</Text>
                        <Text style={styles.itemPrice}>R$ 74,00</Text>
                    </View>
                    <Text style={styles.adicionarButtonText}>+</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemContainer}>
                <Image
                    style={styles.itemImage}
                    source={require('./imagens/steakfrites.jpg')} // Substitua com a imagem desejada
                />
                <View style={styles.itemTextContainer}>
                    <View style={styles.textAndPrice}>   
                        <Text style={styles.itemText}>Steak Frites (Bife grelhado com batatas fritas)</Text>
                        <Text style={styles.itemPrice}>R$ 81,90</Text>
                    </View>
                    <Text style={styles.adicionarButtonText}>+</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.itemContainer}>
                <Image
                    style={styles.itemImage}
                    source={require('./imagens/canard.jpg')} // Substitua com a imagem desejada
                />
                <View style={styles.itemTextContainer}>
                    <View style={styles.textAndPrice}> 
                        <Text style={styles.itemText}>Confit de Canard (Pato confitado com batatas salteadas)</Text>
                        <Text style={styles.itemPrice}>R$ 120,00</Text>
                    </View>
                    <Text style={styles.adicionarButtonText}>+</Text>
                </View>
            </TouchableOpacity>

            <View style={styles.footerMenu}>
                <TouchableOpacity style={styles.menuButton} onPress={() => openModal('info')}>
                    <Image
                        source={require('./imagens/icons8-informações-50.png')}    
                        style={styles.icon}
                    />
                    <Text style={styles.menuText}>Info</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton} onPress={() => openModal('carrinho')}>
                    <Image
                        source={require('./imagens/icons8-carrinho-de-compras02-48.png')}  // Caminho da imagem
                        style={styles.icon}  // Estilo da imagem
                    />        
                    <Text style={styles.menuText}>Carrinho</Text>           
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuButton} onPress={() => openModal('perfil')}>
                    <Image 
                        source={require('./imagens/icons8-male2-user-50.png')}
                        style={styles.icon}
                    />
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
                        {modalContent === 'info' && (
                            <>
                            <Text style={styles.modalText}>{titleTextInfo}</Text>
                            <Text style={styles.modalText}>Horário de Funcionamento: Terça à Domingo das 10h às 22h</Text>
                            <View style={styles.phoneContainer}>
                                <Icon name="phone-classic" size={20} color="#FFA27F" /> 
                                <Text style={styles.modalText}> (21) 2724-5766</Text>
                            </View>
                            <Text style={styles.modalText}> Aceitamos as seguintes bandeiras: </Text>
                            <View style={styles.imageGallery}>
                            
                        <Image 
                            source={require('./imagens/alelo.png')}  
                            style={styles.galleryImage}
                        />
                        <Image 
                            source={require('./imagens/elo.png')} 
                            style={styles.galleryImage}
                        />
                        <Image 
                            source={require('./imagens/hipercard.png')} 
                            style={styles.galleryImage}
                        />
                        <Image 
                            source={require('./imagens/visa.png')}  
                            style={styles.galleryImage}
                        />
                    </View>
                        </>
                            
                        )}
                        {modalContent === 'carrinho' && (
                            <Text style={styles.modalText}>Itens no seu carrinho.</Text>
                        )}
                        {modalContent === 'perfil' && (
                            <Text style={styles.modalText}>Informações do seu perfil.</Text>
                        )}
                        
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
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFA27F', // Altera a cor do background
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start', // Garante que o conteúdo não sobreponha o menu
    },

    itemContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FF0000', // Cor da borda
        padding: 10,
        marginVertical: 10,
        width: '100%', // Ajusta o tamanho dos itens
        maxWidth: 350, // Define uma largura máxima 
        shadowColor: '#000',
        shadowOffSet:{width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    itemImage:{
        width: 70,
        height: 70,
        borderRadius: 30,
        marginRight: 10,
    },
    itemTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-between',
    },
    textAndPrice: {
        flexDirection: 'row',
        alignItens: 'center',
        flex: 1,
        justifyContent: 'space-between',
    },
    adicionarButtonText: {
        fontSize: 28,
        marginRight: 15,
        color: '#FF0000',
    },
    itemText: {
        fontSize: 16,
        color: '#333',
        flex: 1, // Faz o texto ocupar o espaço restante
    },
    itemPrice:{
        fontSize: 16,
        color: 'FF6347',
        marginLeft: 10,
    },

    footerMenu: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#FF6347', 
        flexDirection: 'row',
        justifyContent: 'space-around', 
        borderTopWidth: 1,
        borderTopColor: '#FF0000',
        paddingVertical: 15, 
    },
    menuButton: {
        alignItems: 'center',
        flex: 1, 
    },
    menuText: {
        fontSize: 16,
        color: '#FFF', 
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo escuro translúcido
    },
    modalContent: {
        backgroundColor: '#FFF',
        borderRadius: 10,
        padding: 20,
        width: '80%',
        alignItems: 'center',
    },
    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    phoneIcon: {
        marginRight: 10, 
    },
    imageGallery: {
        flexDirection: 'row',
        flexWrap: 'wrap', 
        justifyContent: 'space-between',
        marginTop: 20,
        width: '100%', 
    },
    galleryImage: {
        width: '25%', 
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
        alignItens: 'center',
    },
    closeButton: {
        backgroundColor: '#FF6347',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        color: '#FFF',
        fontSize: 16,
    },
});

export default Cardapio;
