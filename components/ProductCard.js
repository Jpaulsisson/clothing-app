import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import MyAppText from "./MyAppText";

function ProductCard({ item }) {

  return (
    <View style={styles.container}>
      <MyAppText style={styles.productName}>{item.name}</MyAppText>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111'
    },
    productName: {
      color: '#eee',
      fontSize: 20,
    }
  });

export default ProductCard;
