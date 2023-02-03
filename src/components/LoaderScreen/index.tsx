import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

export default function LoaderScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={48} color="white" />
      <Text style={styles.text}>carregando ...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1d1d2e",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 30,
  },
});
