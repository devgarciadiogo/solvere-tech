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
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Perfil = ({ userId }) => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Função para recuperar o ID do usuário do AsyncStorage
  const retrieveUserId = async () => {
    try {
      const storedUserId = await AsyncStorage.getItem("userId");
      console.log("storedUserId:", storedUserId);
      if (storedUserId) {
        fetchUserData(storedUserId); // Chama a função para buscar dados do usuário
      }
    } catch (error) {
      console.error("Erro ao obter ID do usuário:", error);
      Alert.alert("Erro", "Não foi possível carregar o ID do usuário.");
    }
  };

  useEffect(() => {
    if (userId) {
      fetchUserData(userId); // Se userId é passado como prop
    } else {
      retrieveUserId(); // Se não, tenta obter do AsyncStorage
    }
  }, [userId]);

  const fetchUserData = async (id) => {
    try {
      setIsLoading(true);
      console.log("Buscando dados para o ID:", id);

      const response = await fetch(`http://localhost:3000/api/pessoas/${id}`); // Lembre-se de ajustar a URL para produção

      if (!response.ok) {
        throw new Error("Falha ao buscar dados do usuário");
      }

      const data = await response.json();
      if (data) {
        setUserData(data);
        setName(data.name);
        setEmail(data.email);
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
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
          body: JSON.stringify({ name, email }),
        }
      );

      if (response.ok) {
        Alert.alert("Sucesso", "Dados atualizados com sucesso!");
        fetchUserData(userData.id); // Atualiza os dados do usuário
      } else {
        Alert.alert("Erro", "Falha ao atualizar os dados.");
      }
    } catch (error) {
      console.error("Erro ao atualizar dados:", error);
      Alert.alert("Erro", "Não foi possível atualizar os dados.");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteUserAccount = async () => {
    Alert.alert("Confirmação", "Tem certeza que deseja deletar sua conta?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Deletar",
        onPress: async () => {
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
              await AsyncStorage.removeItem("userId");
              navigation.navigate("Login");
            } else {
              Alert.alert("Erro", "Falha ao deletar a conta.");
            }
          } catch (error) {
            console.error("Erro ao deletar conta:", error);
            Alert.alert("Erro", "Não foi possível deletar a conta.");
          } finally {
            setIsLoading(false);
          }
        },
      },
    ]);
  };

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!userData) {
    return <Text>Carregando...</Text>; // Exibe um texto enquanto os dados estão sendo carregados
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
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
        />
        <Button title="Atualizar Dados" onPress={updateUserData} />
        <Button title="Deletar Conta" onPress={deleteUserAccount} color="red" />
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
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default Perfil;
