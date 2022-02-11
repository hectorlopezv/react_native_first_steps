import React from 'react';
import {FlatList, Button, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import {deleteproduct, deleteProductthunk} from '../../store/productsSlice';

const UserProductScreen = props => {
  const userProducts = useSelector(state => state.products.userProducts);
  const dispatch = useDispatch();
  const editProductHandler = id => {
    props.navigation.navigate('EditProduct', {
      productId: id,
    });
  };
  const deleteHandler = id => {
    Alert.alert('Are your sure?', 'Do you realy want ot delete this item', [
      {text: 'No', style: 'default'},
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          dispatch(deleteproduct(id));
          dispatch(deleteProductthunk(id));
        },
      },
    ]);
  };
  return (
    <FlatList
      data={userProducts}
      renderItem={itemData => (
        <ProductItem
          onSelect={() => {
            editProductHandler(itemData.item.id);
          }}
          price={itemData.item.price}
          title={itemData.item.title}
          image={itemData.item.imageUrl}>
          <Button
            title="Edit"
            onPress={() => {
              editProductHandler(itemData.item.id);
            }}
          />
          <Button
            title="Delete"
            onPress={() => deleteHandler(itemData.item.id)}
          />
        </ProductItem>
      )}
    />
  );
};
export default UserProductScreen;
