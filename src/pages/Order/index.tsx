import { useState } from "react";
import { styles } from "./styles.modules";
import {
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  View,
} from "react-native";

import { useRoute, RouteProp } from "@react-navigation/native";

import { AntDesign } from "@expo/vector-icons";

type RouteDetailParams = {
  Order: {
    number: string | number;
    order_id: string;
  };
};

type OrderRouteProps = RouteProp<RouteDetailParams, "Order">;

export default function Order() {
  const route = useRoute<OrderRouteProps>();

  const { number, order_id } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Mesa {number}</Text>
        <TouchableOpacity>
          <AntDesign name="delete" size={24} color="#ff3f4b" />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.input}>
          <Text style={styles.inputText}>Pizzas</Text>
          <AntDesign name="down" size={14} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.input}>
          <Text style={styles.inputText}>Pizza de frango com catupiry</Text>
          <AntDesign name="down" size={14} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.containerQtd}>
        <Text style={styles.qtdText}>Quantidade</Text>
        <TextInput
          keyboardType="numeric"
          style={[styles.input, styles.inputQtd]}
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
