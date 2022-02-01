import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FiltersScreen from '../screens/FiltersScreen';
import {Button} from 'react-native';

const Stack = createNativeStackNavigator();

const FilterNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
        name="Filters"
        component={FiltersScreen}
        options={optionsProps => ({
          headerLeft: props => (
            <Button
              title="Menu"
              onPress={() => {
                console.log('optionsProps', optionsProps);
                optionsProps.navigation.toggleDrawer();
              }}
            />
          ),
          headerRight: props => {
            const saveFn = optionsProps.route?.params?.save;
            return <Button title="Save" onPress={saveFn} />;
          },
        })}
      />
    </Stack.Navigator>
  );
};
export default FilterNavigator;
