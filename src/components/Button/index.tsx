import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

type ButtonProps = {
  title: string;
  bgColor?: string;
  color?: string;
  loader?: boolean;
  rest: any;
};

export default function Button({
  title,
  bgColor,
  color,
  loader = false,
  ...rest
}: ButtonProps) {
  const styles = StyleSheet.create({
    button: {
      width: "80%",
      height: 40,
      borderRadius: 4,
      marginTop: 10,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: bgColor || "darkgray",
    },
    buttonText: {
      fontSize: 18,
      color: color || "black",
      fontWeight: "bold",
    },
  });

  return (
    <TouchableOpacity style={styles.button} {...rest}>
      {loader ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
