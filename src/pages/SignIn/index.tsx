import { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles.modules";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (!email || !pass) {
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#888"
          secureTextEntry={true}
          value={pass}
          onChangeText={setPass}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.textButton}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
