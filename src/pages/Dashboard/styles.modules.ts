import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1d1d2e",
  },
  title: {
    fontSize: 24,
    color: "white",
  },
  input: {
    backgroundColor: "#101026",
    color: "white",
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    textAlign: "center",
    fontSize: 22,
    height: 60,
    width: "80%",
  },
  button: {
    width: "80%",
    height: 40,
    borderRadius: 4,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3fffa3",
  },
  buttonText: {
    fontSize: 18,
    color: "#101026",
    fontWeight: "bold",
  },
});
