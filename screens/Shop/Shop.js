import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'

import { Mens, Womens, Shoes } from '../../screens'

const Tab = createBottomTabNavigator();

function Shop({route}) {

  return (
    <Tab.Navigator
      initialRouteName={route.params.initialRouteName}
      screenOptions={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch(route.name) {
            case 'Mens':
              iconName = focused ? 'grid' : 'grid-outline';
              break;
            case 'Womens':
              iconName = focused ? 'grid' : 'grid-outline';
              break;
            case 'Shoes':
              iconName = focused ? 'grid' : 'grid-outline';
              break;
              default: console.error('something went wrong');
          }
          return <Ionicons name={iconName} color={color} size={size} />
        },
        tabBarActiveTintColor: '#c5ffe5',
        tabBarInactiveTintColor: 'antiquewhite',
        tabBarStyle: {
          paddingVertical: 2,
          paddingHorizontal: 5,
          backgroundColor: '#111',
          borderTopWidth: 0,
        },
        headerShown: false
      })}>
      <Tab.Screen name="Mens" component={Mens} />
      <Tab.Screen name="Womens" component={Womens} />
      <Tab.Screen name="Shoes" component={Shoes} />
    </Tab.Navigator>
    
  );
}

export default Shop;
