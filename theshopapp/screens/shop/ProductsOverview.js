import React from 'react';
import {FlatList, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import {addtocart} from '../../store/cartSlice';
import {selectProducts} from '../../store/productsSlice';

const ProductsOverviewScreen = props => {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      renderItem={item => (
        <ProductItem
          image={item.item.imageUrl}
          title={item.item.title}
          price={item.item.price}
          onViewDetail={() => {
            props.navigation.navigate('ProductDetail', {
              productId: item.item.id,
              productTitle: item.item.title,
            });
          }}
          onAddToCart={() => {
            dispatch(addtocart(item.item));
          }}
        />
      )}
    />
  );
};
export default ProductsOverviewScreen;
