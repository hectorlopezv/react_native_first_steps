import React from 'react';
import {FlatList, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import {addtocart} from '../../store/cartSlice';

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();
  const selectItemHandler = item => {
    props.navigation.navigate('ProductDetail', {
      productId: item.item.id,
      productTitle: item.item.title,
    });
  };
  const addCartHandler = item => {
    dispatch(addtocart(item.item));
  };
  return (
    <FlatList
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
