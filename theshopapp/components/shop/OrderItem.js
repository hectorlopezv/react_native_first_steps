import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import CartItem from './CartItem';

const OrderItem = props => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>${props?.amount?.toFixed(2)}</Text>
        <Text style={styles.date}>{props?.date}</Text>
      </View>
      <Button
        color={'red'}
        title={showDetails ? 'Hide Details' : 'Show Details'}
        onPress={() => {
          setShowDetails(prevState => !prevState);
        }}
      />
      {!!showDetails && (
        <View>
          {props.items.map(cartItem => (
            <CartItem
              amount={cartItem.sum}
              quantity={cartItem.quantity}
              title={cartItem.title}
              delete
            />
          ))}
        </View>
      )}
    </View>
  );
};
export default OrderItem;
const styles = StyleSheet.create({
  orderItem: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 1, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 20,
    padding: 10,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  totalAmount: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: '#888',
  },
});
