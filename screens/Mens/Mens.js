import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Pressable, SafeAreaView, Text, View, StyleSheet } from "react-native";
import MyAppHeader from "../../components/MyAppHeader";
import MyAppText from "../../components/MyAppText";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useCartContext } from "../../context/CartContext";

function Mens({ navigation }) {

  const { state, dispatch } = useCartContext();
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <MyAppHeader color={'#2058a2'}>Mens </MyAppHeader>
      <NavigationContainer independent={true}>
        
      </NavigationContainer>
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
  title: {
    color: 'antiquewhite',
    fontFamily: ''
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