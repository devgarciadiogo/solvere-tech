import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
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
         <Text style={styles.display1}>Cardápio</Text>
        <TouchableOpacity>
         <Text style={styles.adicionarButtonText}>+</Text>
         <Text style={styles.item1}>Soupe à l'Oignon (Sopa de cebola gratinada)</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
         <Text style={styles.adicionarButtonText}>+</Text>
         <Text style={styles.item2}>Salade de Chèvre Chaud (Salada com queijo de cabra quente)</Text>
        </TouchableOpacity>

        <TouchableOpacity>
         <Text style={styles.adicionarButtonText}>+</Text>
         <Text style={styles.item3}>Coq au Vin (Frango cozido no vinho tinto com cogumelos e bacon)</Text>
        </TouchableOpacity>

        <TouchableOpacity>
         <Text style={styles.adicionarButtonText}>+</Text>
         <Text style={styles.item4}>Steak Frites (Bife grelhado com batatas fritas)</Text>
        </TouchableOpacity>

        <TouchableOpacity>
         <Text style={styles.adicionarButtonText}>+</Text>
         <Text style={styles.item5}>Confit de Canard (Pato confitado com batatas salteadas)</Text>
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
    },
    display1: {
        marginLeft: 10, // Margem esquerda do texto
        marginVertical: 25,
        fontSize: 50,
        textAlign: 'center', // Centraliza o texto
        color: '#000', // Cor do texto
    },
    label: {
        marginVertical: 10,
        marginLeft: 15,
        fontSize: 18,
        color: '#000', // Cor do texto
    },
    input: {
        marginVertical: 10,
        marginTop: 2,
        backgroundColor: '#fff',
        height: 40,
        borderWidth: 1,
        borderColor: '#000', // Cor da borda
        borderRadius: 4,
        marginLeft: 15, // Margem esquerda
        padding: 2, // Espaço interno
        paddingLeft: 10,
        width: 350,
        placeholderTextColor: 'rgba(0, 0, 0, 0.5)',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    adicionarButtonTextButton: {
        backgroundColor: '#FFC100', // Cor do botão
        borderColor: '#000000', // Cor da borda
        borderWidth: 1, // Largura da borda
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 20,
        width: 200,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    adicionarButtonText: {
        color: '#000',
        fontSize: 16,
    },
    copy:{
        marginVertical:30,
        textAlign: 'center',
        marginTop: 180,
        fontSize: 15,
    },
});

export default Cardapio;
