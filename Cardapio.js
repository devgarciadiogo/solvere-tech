import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Cardapio = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleAlign: 'left',
        });
    }, [navigation]);


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

            <StatusBar style="auto" />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFA27F', // Altera a cor do background
        padding: 10,
        alignItems:'center',
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
    }
});

export default Cardapio;
