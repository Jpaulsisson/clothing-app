import React from "react";
import { Pressable, SafeAreaView, Text, View, StyleSheet, ImageBackground } from "react-native";
import MyAppHeader from "../../components/MyAppHeader";
import MyAppText from "../../components/MyAppText";
import { mockClothing } from "../../MockData";

function Home({ navigation }) {

  const mensBG = require('../../assets/mens.jpg')
  const womensBG = require('../../assets/womens.jpeg')
  const shoesBG = require('../../assets/shoes.jpeg')

  return (
    <SafeAreaView style={styles.container}>
      <MyAppHeader color="#c5ffe5">Welcome</MyAppHeader>
      <Pressable 
      style={styles.link}
        onPress={() => navigation.navigate("Shop", {initialRouteName: 'Mens'} )}
        >
        <ImageBackground 
          source={mensBG}
          style={styles.bgImg}
          resizeMode='cover'
          >
          <MyAppText>Mens</MyAppText>
        </ImageBackground>
      </Pressable>
      <Pressable 
        style={styles.link}
        onPress={() => navigation.navigate("Shop", {initialRouteName: 'Womens'} )}
        >
        <ImageBackground
          source={womensBG}
          style={styles.bgImg}
          resizeMode='cover'
        >
          <MyAppText color="#111">Womens</MyAppText>
        </ImageBackground>
      </Pressable>
      <Pressable 
        style={styles.link}
        onPress={() => navigation.navigate("Shop", {initialRouteName: 'Shoes'} )}
        >
          <ImageBackground
          source={shoesBG}
          style={styles.bgImg}
          resizeMode='cover'
        >
          <MyAppText color="#111">Shoes</MyAppText>
        </ImageBackground>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    gap: 8,
  },
  bgImg: {
    flex: 1,
  },
  link: {
    flex: 1,
    padding: 0,
    width: '100%',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'antiquewhite',
    fontSize: 20,
    color: '#ddd'
  }
});

export default Home;
