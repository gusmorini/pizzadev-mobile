import { View, Text } from "react-native";

type ModalCategoryProps = {
  closeModal: () => void;
  selectItem: () => void;
};

export function ModalCategory() {
  return (
    <View style={{ flex: 1, backgroundColor: "#1d1d2e" }}>
      <Text>modal category</Text>
    </View>
  );
}
