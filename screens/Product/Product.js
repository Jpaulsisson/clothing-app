import * as React from "react"
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useCartContext } from "../../context/CartContext";
import MyAppHeader from "../../components/MyAppHeader";


export default function Product(item) {

  const navigation = useNavigation();
  const { state, dispatch } = useCartContext();

  return (
    <View>
      <MyAppHeader>{item.name}</MyAppHeader>
    </View>
  )
}
