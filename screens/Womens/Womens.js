import React from "react";
import { Pressable, SafeAreaView, Text, View, StyleSheet } from "react-native";


function Womens({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Womens page!</Text>
      <Pressable 
        onPress={() => navigation.navigate("Home")}
        >
        <Text 
          style={styles.link}>Go to Home Page!</Text>
      </Pressable>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
  },
  link: {
    borderWidth: 2,
    borderColor: '#036f46',
    fontSize: 20,
    color: '#ddd'
  }
});

export default Womens;
