import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartLink from './components/CartLink';
import { CartProvider } from './context/CartContext';
import linking from './utils'
import MyAppText from './components/MyAppText';

import { Home, Shop, Cart, Product } from './screens'


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
  headerRight: () => (
    <CartLink  />
  )
}

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer linking={linking} fallback={<MyAppText color={'#c0ffee'}>Loading...</MyAppText>}>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={screenHeaderOptions} />
          <Stack.Screen name='Shop' component={Shop} options={screenHeaderOptions} />
          <Stack.Screen name='Cart' component={Cart} options={screenHeaderOptions} />
          <Stack.Screen name='Product' component={Product} options={screenHeaderOptions} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

