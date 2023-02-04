import { useContext } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { AuthContext } from "../../contexts/Auth.context";

export default function Dashboard() {
  const { signOut } = useContext(AuthContext);

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Button onPress={signOut} title="Logout" color="#101026" />
    </View>
  );
}
