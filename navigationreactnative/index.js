import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import {apiSlice} from './store/apislice';
import store from './store/store';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import EntryPointNavigator from './navigation/EntryPointNavigator';
export const users = store.dispatch(apiSlice.endpoints.getUsers.initiate());
const Entry = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <EntryPointNavigator />
      </NavigationContainer>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Entry);
