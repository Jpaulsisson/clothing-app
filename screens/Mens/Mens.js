import React from "react";
import { Pressable, SafeAreaView, Text, View, StyleSheet } from "react-native";
import MyAppHeader from "../../components/MyAppHeader";
import MyAppText from "../../components/MyAppText";

function Mens({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <MyAppHeader color={'#2058a6'}>Mens </MyAppHeader>
      <Pressable 
        onPress={() => navigation.navigate("Home")}
        >
        <MyAppText 
          style={styles.link}>Go to Home Page!</MyAppText>
      </Pressable>

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
