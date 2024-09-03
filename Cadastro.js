import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; // Corrigido aqui

const Stack = createStackNavigator();

const Cadastro = ({ navigation }) => {
    const [usermat, setUsermat] = useState('');
    const [username, setUsername] = useState('');

    const handleGravar = () => {
        alert("...");   
    };
    
    return (
        <View style={[styles.container, { backgroundColor: '#FF4500' }]}>
            <Text style={[styles.label, { marginBottom: 20, textAlign: 'center', fontSize: 20, margin: 5 }]}> {/* Corrigido aqui */}
                Solvere Tech
            </Text>
            {/* Input Container */}
            <View style={styles.inputContainer}>
                <View style={styles.inputGroup}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#FF4500', //Altera a cor do background
        },
});

export default Cadastro; // Certifique-se de exportar o componente corretamente




