import React from "react";
import { Pressable, SafeAreaView, Text, View, StyleSheet } from "react-native";


function Home({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello</Text>
      <Pressable 
        onPress={() => navigation.navigate("Home")}
        >
        <Text 
          style={styles.link}>Home Page!</Text>
      </Pressable>
      <Pressable 
        onPress={() => navigation.navigate("Shop")}
        >
        <Text 
          style={styles.link}>Go to Shopping Page!</Text>
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
  link: {
    borderWidth: 2,
    borderColor: '#036f46',
    fontSize: 20,
    color: '#ddd'
  }
});

export default Home;
