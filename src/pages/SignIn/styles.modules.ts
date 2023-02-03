import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#1d1d2e",
  },
  logo: {
    width: "60%",
    resizeMode: "contain",
  },
  inputContainer: {
    marginTop: 20,
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "#101026",
    width: "100%",
    paddingHorizontal: 14,
    color: "white",
    marginBottom: 10,
    height: 40,
    borderRadius: 4,
  },
  button: {
    width: "100%",
    marginTop: 4,
    height: 40,
    backgroundColor: "#3fffa3",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  textButton: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#101026",
  },
});
