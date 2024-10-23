import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Perfil = ({ userId }) => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const retrieveUserId = async () => {
    try {
      const storedUserId = await AsyncStorage.getItem("userId");
      if (storedUserId) {
        fetchUserData(storedUserId);
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar o ID do usuário.");
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserData(userId);
    } else {
      retrieveUserId();
    }
  }, [userId]);

  const fetchUserData = async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:3000/api/pessoas/${id}`);
      if (!response.ok) throw new Error("Falha ao buscar dados do usuário");
      const data = await response.json();
      if (data) {
        setUserData(data);
        setName(data.nome || "");
        setTelefone(data.telefone || "");
        setEmail(data.email || "");
        setSenha(data.senha || "");
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os dados do usuário.");
    } finally {
      setIsLoading(false);
    }
  };

  const updateUserData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:3000/api/pessoas/${userData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nome: name, telefone, email, senha }),
        }
      );

      if (response.ok) {
        Alert.alert("Sucesso", "Dados atualizados com sucesso!");
        fetchUserData(userData.id);
      } else {
        Alert.alert("Erro", "Falha ao atualizar os dados.");
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível atualizar os dados.");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteUserAccount = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `http://localhost:3000/api/pessoas/${userData.id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        Alert.alert("Sucesso", "Conta deletada com sucesso!");
        // Limpa o AsyncStorage e navega para a tela de login
        await AsyncStorage.removeItem("userId");
        navigation.navigate("Login");
      } else {
        Alert.alert("Erro", "Falha ao deletar a conta.");
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível deletar a conta.");
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!userData) {
    return <Text>Carregando...</Text>;
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#FFA27F" />
      <Text style={styles.title}>Seu Perfil</Text>
      <View style={styles.infoContainer}>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Nome"
        />
        <TextInput
          style={styles.input}
          value={telefone}
          onChangeText={setTelefone}
          placeholder="Telefone"
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
            placeholder="Senha"
            secureTextEntry={!isPasswordVisible}
          />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Text style={styles.toggleText}>
              {isPasswordVisible ? "Ocultar" : "Mostrar"}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={updateUserData}>
          <Text style={styles.buttonText}>Atualizar Dados</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={deleteUserAccount}
        >
          <Text style={styles.buttonText}>Deletar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA27F",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#000",
  },
  infoContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  toggleText: {
    color: "#007AFF",
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#6EC207",
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "red",
  },
});

export default Perfil;
