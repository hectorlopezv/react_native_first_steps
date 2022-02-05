import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CartItem = props => {
  console.log('carITEMpROPS', props);
  return (
    <View style={styles.cartItem}>
      <Text style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity}</Text>
        <Text>{props.title}</Text>
      </Text>
      <View style={styles.itemData}>
        <Text style={styles.amount}>{props.amount.toFixed(2)}</Text>
        {!!props?.delete && (
          <Button title="delete" color="red" onPress={props.onRemove} />
        )}
      </View>
    </View>
  );
};
export default CartItem;
const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    fontFamily: 'OpenSans-Regular',
    color: '#888',
    fontSize: 16,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
  },
  amount: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
  },
});
