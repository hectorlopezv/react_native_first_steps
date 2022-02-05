import React from 'react';
import Colors from '../constants/Colors';
import {createDrawerNavigator} from '@react-navigation/drawer';
import OrdersNavigator from './OrdersNavigator';
import ProductsNavigator from './ProductsNavigator';


const Drawer = createDrawerNavigator();
export const defaultOptionsStackNav = {
  headerTitleStyle: {
    fontFamily: 'OpenSans-Regular',
  },
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTintColor: 'white',
};
const ShopNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Products" component={ProductsNavigator} />
      <Drawer.Screen name="Orders" component={OrdersNavigator} />
    </Drawer.Navigator>
  );
};

export default ShopNavigator;
