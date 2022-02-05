import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../screens/shop/CartScreen';
import {defaultOptionsStackNav} from './shopNavigator';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/UI/HeaderButton';
import OrdersScreen from '../screens/shop/OrdersScreen';
const Stack = createNativeStackNavigator();
const OrdersNavigator = props => {
  return (
    <Stack.Navigator
      screenOptions={navProps => {
        return {
          ...defaultOptionsStackNav,
          title: 'Your Orders',
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponet={CustomHeaderButton}>
              <Item
                title="Menu"
                iconName="search"
                onPress={() => {
                  navProps.navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
        };
      }}>
      <Stack.Screen
        name="Cart"
        component={OrdersScreen}
        options={propsOptions => {
          return {};
        }}
      />
    </Stack.Navigator>
  );
};
export default OrdersNavigator;
