import React from "react";
import { Pressable, SafeAreaView, Text, View, StyleSheet } from "react-native";
import MyAppHeader from "../../components/MyAppHeader";
import MyAppText from "../../components/MyAppText";


function Shoes({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <MyAppHeader color={"#a58d14"}>Shoes</MyAppHeader>
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
  },
  link: {
    borderWidth: 2,
    borderColor: '#036f46',
    fontSize: 20,
    color: '#ddd'
  }
});

export default Shoes;
