import { useState } from "react";
import { styles } from "./styles.modules";
import { Text, TouchableOpacity, SafeAreaView, TextInput } from "react-native";

import { useRoute, RouteProp } from "@react-navigation/native";

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
      <Text>Table: {number}</Text>
      <Text>Id: {order_id}</Text>
    </SafeAreaView>
  );
}
