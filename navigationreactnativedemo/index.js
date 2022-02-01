import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import store from './store/store';
import {Provider} from 'react-redux';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import EntryNav from './navigation/EntryNav';
const Entry = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <EntryNav />
      </NavigationContainer>
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => Entry);
