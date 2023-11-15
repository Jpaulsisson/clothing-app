import * as React from "react";
import { Pressable, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import MyAppText from "./MyAppText";
import { useWindowDimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useCartContext } from '../context/CartContext';

function ProductCard({ item }) {

  const { height, width } = useWindowDimensions();
  const [chosenColorIdx, setChosenColorIdx] = React.useState(0);
  const [chosenSizeIdx, setChosenSizeIdx] = React.useState(0);
  const { state, dispatch } = useCartContext();

  const addItemToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
  }

  return (
    <View style={styles.container}>
        <Image src={item.url} style={[styles.productImage, { width: width, height: height / 2}]} />
        <View style={styles.detailsContainer}>
          <MyAppText style={styles.productName}>{item.name}</MyAppText>
          <View style={styles.colorsContainer}>
            {item.colors.map((color, index) => {
              return (
              <View key={color.name + index} style={styles.color}>
                <Pressable onPress={() => setChosenColorIdx(index)} style={[styles.colorButton, { backgroundColor: color.hex }]}>
                  <Icon name='circle' size={50} color={chosenColorIdx === index ? '#2da38e' : '#222'} />
                </Pressable>
                <MyAppText style={styles.colorName}>{color.name}</MyAppText>
              </View>)
            })}
          </View>
          <View style={styles.sizesContainer}>
            {item.sizes.map((size, index) => {
              return (
              <View key={size + index} style={styles.size}>
                <Pressable onPress={() => setChosenSizeIdx(index)} style={styles.sizeButton}>
                  <Icon name='circle' size={30} color={chosenSizeIdx === index ? '#2da38e' : '#eee'} />
                </Pressable>
                <MyAppText style={styles.sizeName}>{size}</MyAppText>
              </View>)
            })}
          </View>
          <View style={styles.priceAndAddContainer}>
            <MyAppText style={styles.price}>
              ${item.price}<MyAppText style={styles.priceSpan}> + tax</MyAppText>
            </MyAppText>
            <TouchableOpacity 
              onPress={() => addItemToCart(item)}
              >
              <Icon name='plus-square' size={40} color={'#eee'} />
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111',
    },
    productImage: {
      
    },
    detailsContainer: {
      flex: 1,
      backgroundColor: '#111',
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,
      marginTop: -50,
      paddingTop: 45,
      paddingHorizontal: 15,
      gap: 40,
    },
    productName: {
      color: '#eee',
      fontSize: 28,
    },
    colorsContainer: {
      flexDirection: 'row',
      height: 55,
      width: '100%',
      gap: 20,
    },
    colorButton: { 
      aspectRatio: 1, 
      borderRadius: '50%',
    },
    colorName: {
      fontSize: 14,
      color: '#fff',
      textAlign: 'center',
      maxWidth: 50,
    },
    sizesContainer: {
      flexDirection: 'row',
      height: 55,
      width: '100%',
      gap: 20,
    },
    sizeButton: { 
      aspectRatio: 1, 
      borderRadius: '50%',
    },
    sizeName: {
      fontSize: 14,
      color: '#fff',
      textAlign: 'center',
      maxWidth: 50,
    },
    priceAndAddContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    price: {
      color: '#eee',
      fontSize: 28,
    },
    priceSpan: {
      fontSize: 12,
      color: '#eee',
    }
  });

export default ProductCard;
