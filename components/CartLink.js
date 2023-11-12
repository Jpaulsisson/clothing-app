import * as React from "react"
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function CartLink() {

  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate('Cart')}
      style={{
        width: 40,
        height: 40,
      }}
    >
      <Icon name="shopping-bag" size={25} color="antiquewhite" />
    </Pressable>
  )
}
