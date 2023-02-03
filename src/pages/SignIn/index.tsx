import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles.modules";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../assets/logo.png")} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#888"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Acessar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
