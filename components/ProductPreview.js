import * as React from "react";
import { Pressable, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import MyAppText from "./MyAppText";
import { useWindowDimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useCartContext } from '../context/CartContext';

function ProductPreview({ navigation, item }) {

  const { height, width } = useWindowDimensions();
  const { state, dispatch } = useCartContext();

  const addItemToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
  }

  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate('Product', { item: item, id: item.id })}>
      <Image source={{ uri: item.url }} style={{height: 400, width: width - 30}} />
      <View style={styles.detailsPreview}>
          <MyAppText style={styles.namePreview}>{item.name}</MyAppText>
        <View style={styles.colorsAndPriceContainer}>
          <View style={styles.colorsContainer}>
            {item.colors.map((color) => {
              return (
                <View key={color.name + color.hex} style={[styles.color, { backgroundColor: color.hex }]} >
                  <Icon name='circle' size={25} color={'#333'}/>
                </View>
              )
            })}
          </View>
          <MyAppText style={styles.pricePreview}>${item.price}</MyAppText>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111',
      marginBottom: 40,
    },
    detailsPreview: {
      flex: 2,
      paddingVertical: 10,
      gap: 10,
    },
    namePreview: {
      color: '#eee',
      fontSize: 16,
    },
    colorsAndPriceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    colorsContainer: {
      flexDirection: 'row',
      gap: 8,
    },
    color: {
      aspectRatio: 1,
      borderRadius: '50%',
    },
    pricePreview: {
      color: '#eee',
      fontSize: 18,
    }
  });

export default ProductPreview;
