import * as React from 'react';
import { Image, View, StyleSheet, ScrollView, Pressable } from 'react-native';
import MyAppText from '../../components/MyAppText';
import { useCartContext } from '../../context/CartContext';
import Icon from 'react-native-vector-icons/Feather';

export function Cart() {

  function deriveTotal(items) {
    const total = items.reduce((total, item) => total + item.price, 0);
    return total;
  }

  const { state, dispatch } = useCartContext();

  const { items } = state;

  const total = deriveTotal(items);
  
  const removeItemFromCart = (index) => {
    dispatch({ type: 'REMOVE_ITEM', payload: index });
  }

    return (
      <View style={styles.container}>
        <ScrollView vertical>
          {items.map((item, index) => {
            return (
              <View style={styles.cartItem}>
                <Image source={{ uri: item.url }} style={styles.itemImage} />
                <MyAppText style={styles.itemName}>{item.name}</MyAppText>
                <MyAppText style={styles.itemPrice}>@ ${item.price}</MyAppText>
                <Pressable onPress={() => removeItemFromCart(index)}>
                  <Icon name='x-square' size={30} color={'crimson'} />
                </Pressable>
              </View>
            )
          })}
        </ScrollView>
        <MyAppText style={styles.total}>
          ${total}
          <MyAppText style={styles.totalSpan}> + tax</MyAppText>
        </MyAppText>
      </View>
    )
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#111',
  paddingVertical: 50,
  paddingHorizontal: 10,
  justifyContent: 'space-between',
},
cartItem: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 10,
  paddingRight: 25,
  borderBottomColor: '#eee',
  borderBottomWidth: 1,
},
itemImage: {
  height: 35,
  width: 35,
  borderRadius: 5,
},
itemName: {
  color: '#eee',
  fontSize: 18,
},
itemPrice: {
  color: '#eee',
  fontSize: 12,
},
total: {
  fontSize: 48,
  color: '#eee',
  textAlign: 'right',
  paddingRight: 10,
},
totalSpan: {
  fontSize: 16,
  textAlign: 'right',
},
})

export default Cart
