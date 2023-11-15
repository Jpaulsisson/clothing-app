import React from "react";
import { Pressable, SafeAreaView, Text, View, StyleSheet, Image, ScrollView } from "react-native";
import MyAppHeader from "../../components/MyAppHeader";
import MyAppText from "../../components/MyAppText";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useCartContext } from "../../context/CartContext";
import { mockClothing } from "../../MockData";

function Mens({ navigation }) {

  const MOCK_DATA = mockClothing.mens;

  const { state, dispatch } = useCartContext();
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <MyAppHeader style={styles.header}>Mens</MyAppHeader>
      <ScrollView vertical>
        {MOCK_DATA.map((item) => {
          return (
            <Pressable key={item.id} onPress={() => navigation.navigate('Product', { item: item, id: item.id })}>
              <Image source={{ uri: item.url }} style={{height: 200, width: 300}} />
            </Pressable>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    color: '#036f46',
    fontSize: 48,
  },
  link: {
    borderWidth: 2,
    borderColor: '#036f46',
    fontSize: 20,
    color: '#ddd'
  }
});

export default Mens;



{/* <Pressable 
        onPress={() => navigation.navigate("Home")}
        >
        <MyAppText 
          style={styles.link}>Home</MyAppText>
      </Pressable> */}