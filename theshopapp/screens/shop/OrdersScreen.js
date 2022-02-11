import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import OrderItem from '../../components/shop/OrderItem';
import {setOrderThunk} from '../../store/ordersSlice';

const OrdersScreen = (props) => {
  const orders = useSelector(state => state.orders.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      dispatch(setOrderThunk());
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <FlatList
      data={orders}
      renderItem={itemData => (
        <OrderItem
          date={itemData.item.readableDate}
          amount={itemData.item.totalAmount}
          items={itemData.item.items}
        />
      )}
    />
  );
};
export default OrdersScreen;
