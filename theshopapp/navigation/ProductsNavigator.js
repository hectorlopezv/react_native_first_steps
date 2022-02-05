import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomHeaderButton from '../components/UI/HeaderButton';
import CartScreen from '../screens/shop/CartScreen';
import ProductDetailScreen from '../screens/shop/ProductDetails';
import ProductsOverviewScreen from '../screens/shop/ProductsOverview';
import {defaultOptionsStackNav} from './shopNavigator';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
const Stack = createNativeStackNavigator();
const ProductsNavigator = props => {
  return (
    <Stack.Navigator screenOptions={{...defaultOptionsStackNav}}>
      <Stack.Screen
        name="ProductsOverview"
        component={ProductsOverviewScreen}
        options={props => {
          return {
            headerTitle: 'All Products',
            headerRight: () => (
              <HeaderButtons HeaderButtonComponet={CustomHeaderButton}>
                <Item
                  title="cart"
                  iconName="search"
                  onPress={() => {
                    props.navigation.navigate('Cart');
                  }}
                />
              </HeaderButtons>
            ),
          };
        }}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={propsOptions => {
          return {
            headerTitle: propsOptions.route.params.productTitle,
          };
        }}
      />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={propsOptions => {
          return {};
        }}
      />
    </Stack.Navigator>
  );
};
export default ProductsNavigator;
