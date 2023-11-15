import * as React from "react"
import { StyleSheet } from 'react-native';
import ProductCard from "../../components/ProductCard";

export default function Product({ route }) {

  const { item } = route.params;

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
