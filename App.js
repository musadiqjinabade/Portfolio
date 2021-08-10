import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MainApp from './src/MainApp';
import SplashScreen from  "react-native-splash-screen";


export default class App extends Component {

  componentDidMount(){
    SplashScreen.hide();

  }

  render() {
    return (
        <MainApp />
      
    );
  }
}