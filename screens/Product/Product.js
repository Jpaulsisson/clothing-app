import * as React from "react"
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import {useWindowDimensions} from 'react-native';
import { useCartContext } from "../../context/CartContext";
import MyAppHeader from "../../components/MyAppHeader";
import MyAppText from '../../components/MyAppText';
import ProductCard from "../../components/ProductCard";

export default function Product({ route }) {

  const { item } = route.params;

  const navigation = useNavigation();
  const { height, width } = useWindowDimensions();
  const { state, dispatch } = useCartContext();

  return (
    <ProductCard item={item} />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    backgroundColor: '#111'
  }
})
