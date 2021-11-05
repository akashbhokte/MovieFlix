// In Navi.js in a new project

import * as React from 'react';
import { View, Text, Button, } from 'react-native';
import {
  NavigationContainer, DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import NowPlayingScreen from './orignal/NowPlayingScreen';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import Detail from './orignal/Detail';
import RatedScreen from "./orignal/RatedScreen"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

function Navi({ Navigation }) {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>

        <Stack.Screen name="TabNavi" component={TabNavi} options={{ headerShown: false }} />
        <Stack.Screen name="NowPlayingScreen" component={NowPlayingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Detail" component={Detail} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const TabNavi = ({ Navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="NowPlayingScreen" component={NowPlayingScreen}

        options={{

          headerShown: false,
          tabBarLabel: 'Now Playing',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="video-collection" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Details" component={RatedScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Top Rated',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="star-outlined" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default Navi;

