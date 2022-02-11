import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Button,
  ActivityIndicator,
  View,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import {addtocart} from '../../store/cartSlice';
import {setProductsthunk} from '../../store/productsSlice';

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  const isLoadingProducts = useSelector(state => state.products.statusproducts);
  const dispatch = useDispatch();
  const selectItemHandler = item => {
    props.navigation.navigate('ProductDetail', {
      productId: item.item.id,
      productTitle: item.item.title,
    });
  };
  const addCartHandler = item => {
    dispatch(addtocart(item.item));
    props.navigation.navigate('Cart');
  };
  const loadProducts = () => {
    dispatch(setProductsthunk());
  };

  useEffect(() => {
    dispatch(setProductsthunk());

    const unsubscribe = props.navigation.addListener('focus', loadProducts);

    return unsubscribe;
  }, [dispatch]);

  if (isLoadingProducts === 'pending') {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size={'large'} color={'red'} />
      </View>
    );
  }

  if (isLoadingProducts === 'fulfilled' && products && products.length === 0) {
    return (
      <View>
        <Text>No Products Found start adding products</Text>
      </View>
    );
  }

  return (
    <FlatList
      refreshing={isLoadingProducts === 'pending'}
      onRefresh={loadProducts}
      data={products}
      renderItem={item => (
        <ProductItem
          image={item.item.imageUrl}
          title={item.item.title}
          price={item.item.price}
          onSelect={() => selectItemHandler(item)}>
          <Button
            title="View Details"
            onPress={() => selectItemHandler(item)}
          />
          <Button title="To Cart" onPress={() => addCartHandler(item)} />
        </ProductItem>
      )}
    />
  );
};
export default ProductsOverviewScreen;
const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
