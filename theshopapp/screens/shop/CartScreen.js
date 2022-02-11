import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Colors from '../../constants/Colors';
import CarItem from '../../components/shop/CartItem';
import {removefromcart} from '../../store/cartSlice';
import {addorder, addOrderThunk, setOrderThunk} from '../../store/ordersSlice';
import {deleteProductthunk} from '../../store/productsSlice';

const CartScreen = props => {
  const dispatch = useDispatch();
  const cartTotalAmount = useSelector(state => state.cart.totalAmount);
  const ordersLoading = useSelector(state => state.orders.statusorders);
  const cartItems = useSelector(state => {
    const trasformedCartItems = [];
    for (let key in state?.cart?.items) {
      trasformedCartItems.push({
        productId: key,
        title: state.cart.items[key].productTitle,
        price: state.cart.items[key].productPrice,
        quantity: state.cart.items[key].quantity,
        sum: state.cart.items[key].sum,
      });
    }
    return trasformedCartItems;
  });


  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:{' '}
          <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
        </Text>

        {ordersLoading === 'pending' ? (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size={'large'} color={'red'} />
          </View>
        ) : (
          <Button
            title="Order Now"
            onPress={() => {
              dispatch(
                addorder({cartItems: cartItems, totalAmount: cartTotalAmount}),
              );
              dispatch(
                addOrderThunk({
                  cartItems: cartItems,
                  totalAmount: cartTotalAmount,
                }),
              );
            }}
            disabled={cartItems.length === 0}
          />
        )}
      </View>
      <FlatList
        data={cartItems}
        renderItem={itemData => (
          <CarItem
            title={itemData.item.title}
            quantity={itemData.item.quantity}
            amount={itemData.item.sum}
            onRemove={() => {
              dispatch(removefromcart(itemData.item.productId));
              dispatch(deleteProductthunk(itemData.item.productId));
            }}
          />
        )}
      />
    </View>
  );
};
export default CartScreen;
const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  summaryText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
  },
  amount: {
    color: Colors.accent,
  },
});
