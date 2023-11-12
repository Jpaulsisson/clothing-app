import * as React from "react"
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useCartContext } from "../context/CartContext";


export default function CartLink() {

  const navigation = useNavigation();
  const { state } = useCartContext();

  return (
    <Pressable
      onPress={() => navigation.navigate('Cart')}
      style={{
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon name="shopping-bag" size={25} color="antiquewhite" />
      <Text style={{
        color: '#111',
        position: 'absolute',
        top: 20,
        textAlign: 'center',
        fontSize: 12,
      }}>{state.items.length}</Text>
    </Pressable>
  )
}
