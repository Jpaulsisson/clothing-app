import React from "react";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Mens, Womens, Shoes } from '../../screens'

const Tab = createBottomTabNavigator();

function Shop({ navigation }) {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Mens" component={Mens} />
      <Tab.Screen name="Womens" component={Womens} />
      <Tab.Screen name="Shoes" component={Shoes} />
    </Tab.Navigator>
    
  );
}

export default Shop;
