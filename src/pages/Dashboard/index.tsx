import { styles } from "./styles.modules";

import {
  View,
  Text,
  TouchableOpacity,
  Button,
  SafeAreaView,
  TextInput,
} from "react-native";

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Novo Pedido</Text>
      <TextInput
        style={styles.input}
        placeholder="número da mesa"
        placeholderTextColor="#f0f0f0"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>abrir mesa</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
