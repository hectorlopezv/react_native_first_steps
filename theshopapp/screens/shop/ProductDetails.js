import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Colors from '../../constants/Colors';
import {addtocart} from '../../store/cartSlice';

const ProductDetailScreen = props => {
  const dispatch = useDispatch();
  const {productId = null} = props.route?.params;
  const selectedProduct = useSelector(state =>
    state.products.availableProducts.find(prod => prod.id === productId),
  );
  return (
    <ScrollView>
      <Image source={{uri: selectedProduct.imageUrl}} style={styles.image} />
      <View style={styles.actions}>
        <Button
          title="Add to Cart"
          onPress={() => {
            dispatch(addtocart(selectedProduct));
          }}
          color={Colors.primary}
        />
      </View>

      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};
export default ProductDetailScreen;

const styles = StyleSheet.create({
  actions: {
    marginVertical: 10,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
  },
  price: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    textAlign: 'center',
  },
});
