import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

const ProductItem = props => {
  return (
    <TouchableOpacity onPress={props?.onSelect}>
      <View style={styles.product}>
        <View style={styles.imageContainer}>
          <Image source={{uri: props?.image}} style={styles.image} />
        </View>

        <View style={styles.details}>
          <Text style={styles.title}>{props?.title}</Text>
          <Text style={styles.price}>{props?.price?.toFixed(2)}</Text>
        </View>

        <View style={styles.actions}>{props.children}</View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  imageContainer: {
    height: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    marginVertical: 3,
  },
  price: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20,
  },
  image: {width: '100%', height: '100%'},
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 1, height: 2},
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
  },
});
