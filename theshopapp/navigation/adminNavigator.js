import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {defaultOptionsStackNav} from './shopNavigator';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/UI/HeaderButton';
import UserProductScreen from '../screens/user/UserProduct';
import EditProductScreen from '../screens/user/EditProduct';
const Stack = createNativeStackNavigator();
const AdminNavigator = props => {
  return (
    <Stack.Navigator
      screenOptions={navProps => {
        return {
          headerTitle: navProps?.route?.params?.productId
            ? 'Edit Product'
            : 'Add Product',
          headerRight: () => (
            <HeaderButtons HeaderButtonComponet={CustomHeaderButton}>
              <Item
                title="EditProduct"
                iconName="edit"
                onPress={() => {
                  navProps.navigation.navigate('EditProduct');
                }}
              />
            </HeaderButtons>
          ),
        };
      }}>
      <Stack.Screen
        name="UserProducts"
        component={UserProductScreen}
        options={propsOptions => {
          return {};
        }}
      />
      <Stack.Screen
        name="EditProduct"
        component={EditProductScreen}
        options={propsOptions => {
          const submitFn = propsOptions?.route?.params?.submit;
          console.log('submitFn', submitFn);
          return {
            headerRight: () => (
              <HeaderButtons HeaderButtonComponet={CustomHeaderButton}>
                <Item title="Save" iconName="edit" onPress={submitFn} />
              </HeaderButtons>
            ),
          };
        }}
      />
    </Stack.Navigator>
  );
};
export default AdminNavigator;
