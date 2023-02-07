import { useState, useEffect } from "react";
import { styles } from "./styles.modules";
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  View,
} from "react-native";

import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { api } from "../../services/api";

type RouteDetailParams = {
  Order: {
    number: string | number;
    order_id: string;
  };
};

type CategoryProps = {
  id: string;
  name: string;
};

type OrderRouteProps = RouteProp<RouteDetailParams, "Order">;

export default function Order() {
  const route = useRoute<OrderRouteProps>();
  const navigation = useNavigation();

  const { number, order_id } = route.params;

  const [category, setCategory] = useState<CategoryProps[] | []>([]);
  const [categorySelected, setCategorySelected] = useState<CategoryProps>();

  const [amount, setAmount] = useState("1");

  const loadInfoCategory = async () => {
    try {
      const { data } = await api.get("/category");
      setCategory(data);
      setCategorySelected(data[0]);
    } catch (err) {
      console.log("ERROR LOAD INFO ", err);
    }
  };

  useEffect(() => {
    loadInfoCategory();
  }, []);

  async function closeOrder() {
    try {
      await api.delete(`/order/${order_id}`);
      navigation.goBack();
    } catch (err) {
      console.log("error close order ", err);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mesa {number}</Text>
        <TouchableOpacity onPress={closeOrder}>
          <AntDesign name="delete" size={24} color="#ff3f4b" />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.input}>
          <Text style={[styles.inputText, { textTransform: "uppercase" }]}>
            {categorySelected?.name}
          </Text>
          <AntDesign name="down" size={14} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.input}>
          <Text style={[styles.inputText, { textTransform: "uppercase" }]}>
            Pizza de frango com catupiry
          </Text>
          <AntDesign name="down" size={14} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.containerQtd}>
        <Text style={styles.qtdText}>Quantidade</Text>
        <TextInput
          keyboardType="numeric"
          style={[styles.input, styles.inputQtd]}
          value={amount}
          onChangeText={setAmount}
          placeholderTextColor="#f0f0f0"
        ></TextInput>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={[styles.input, styles.inputPlus]}>
          <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.input, styles.inputNext]}>
          <Text style={[styles.inputText, styles.inputTextNext]}>Avançar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
