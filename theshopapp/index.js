import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
const Entry = () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};
AppRegistry.registerComponent(appName, () => Entry);
