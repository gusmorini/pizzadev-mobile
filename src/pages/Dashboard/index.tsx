import { useState } from "react";
import { styles } from "./styles.modules";
import { Text, TouchableOpacity, SafeAreaView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamsList } from "../../routes/app.routes";

import { api } from "../../services/api";

export default function Dashboard() {
  const navigation =
    useNavigation<NativeStackNavigationProp<StackParamsList>>();

  const [number, setNumber] = useState("");

  const handleOpenTable = () => {
    if (!number || +number <= 0) {
      return;
    }

    try {
      api
        .post("/order", {
          table: Number(number),
          name: "",
        })
        .then((response) => {
          const { table, id } = response.data;
          navigation.navigate("Order", { number: table, order_id: id });
          setNumber("");
        });
    } catch (err) {
      console.log("ERROR OPEN TABLE ", err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo Pedido</Text>
      <TextInput
        style={styles.input}
        placeholder="número da mesa"
        placeholderTextColor="#f0f0f0"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />
      <TouchableOpacity style={styles.button} onPress={handleOpenTable}>
        <Text style={styles.buttonText}>abrir mesa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
