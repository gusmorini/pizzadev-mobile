import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#1d1d2e",
    paddingHorizontal: 20,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  headerText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#101026",
    color: "white",
    borderRadius: 4,
    height: 40,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  inputText: {
    color: "white",
    fontSize: 12,
  },
  containerQtd: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  qtdText: {
    color: "white",
    fontWeight: "bold",
    marginRight: 10,
    fontSize: 20,
  },
  inputQtd: {
    flex: 1,
    textAlign: "center",
    maxWidth: "40%",
  },
  actions: {
    flexDirection: "row",
  },
  inputPlus: {
    marginRight: 10,
    backgroundColor: "#3fd1ff",
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
  inputNext: {
    flex: 1,
    backgroundColor: "#3fffa3",
    justifyContent: "center",
  },
  inputTextNext: {
    fontSize: 14,
    color: "#101026",
    fontWeight: "bold",
  },
});
