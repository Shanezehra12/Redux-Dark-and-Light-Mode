import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
import DarkLogin from './darktheme/DarkLogin';
import DarkSignUp from './darktheme/DarkSignUp';


const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="DarkLogin"
          component={DarkLogin}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="DarkSignUp"
          component={DarkSignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
