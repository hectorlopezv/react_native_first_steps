import React from 'react';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import OrderItem from '../../components/shop/OrderItem';

const OrdersScreen = () => {
  const orders = useSelector(state => state.orders.orders);

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
