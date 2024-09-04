import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Cadastro = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleAlign: 'left',
        });
    }, [navigation]);
    
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    const handleGravar = () => {
        alert("...");
    };
    
    return (
        <View style={styles.container}>

            <Text style={styles.display1}>CADASTRO</Text>

            <Text style={styles.label}>Nome Completo</Text>
            <TextInput
                style={styles.input}
                value={nome}
                onChangeText={setNome}
                placeholder='Digite seu nome completo'
            />

            <Text style={styles.label}>Telefone</Text>
            <TextInput
                style={styles.input}
                value={telefone}
                onChangeText={setTelefone}
                keyboardType='phone-pad'
                placeholder='Digite seu telefone'
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                keyboardType='email-address'
                placeholder='Insira seu email aqui!'
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput
                style={styles.input}
                value={senha}
                onChangeText={setSenha}
                secureTextEntry={true}
                placeholder='Insira sua senha aqui!'
            />
            <TouchableOpacity
                style={styles.loginButton}
                onPress={handleGravar}
            >
                <Text style={styles.loginButtonText}>Gravar</Text>
            </TouchableOpacity>

            
            <Text style = {styles.copy}> © 2024 Solvere Tech. Todos os direitos reservados.</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C40C0C', // Altera a cor do background
        padding: 10,
    },
    display1: {
        marginLeft: 10, // Margem esquerda do texto
        marginVertical: 25,
        fontSize: 25,
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
    loginButton: {
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
    loginButtonText: {
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

export default Cadastro;
