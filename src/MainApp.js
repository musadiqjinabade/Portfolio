import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './Screens/Dashboard';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  
  function MainApp() {
    return (
      <NavigationContainer>
        {/* <App/> */}
        
        <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard}  options={{headerShown: false}}  />
        </Stack.Navigator>
       
      </NavigationContainer>
    );
  }

export default MainApp