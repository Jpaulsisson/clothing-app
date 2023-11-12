import 'react-native-gesture-handler';

import * as React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartLink from './components/CartLink';

import { Home, Shop, Cart } from './screens'


const Stack = createNativeStackNavigator();

const screenHeaderOptions = {
  headerStyle: {
    backgroundColor: '#111',
  },
  headerTintColor: 'antiquewhite',
  headerTitleStyle: {
    fontWeight: '200'
  },
  headerBackTitleVisible: false,
  headerRight: ({navigation}) => (
    <CartLink navigation={navigation} />
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={screenHeaderOptions} />
        <Stack.Screen name='Shop' component={Shop} options={screenHeaderOptions} />
        <Stack.Screen name='Cart' component={Cart} options={screenHeaderOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

