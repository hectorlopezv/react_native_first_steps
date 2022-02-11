import React, {useEffect, useCallback, useReducer} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Input from '../../components/UI/Input';
import {
  createProductthunk,
  updateproduct,
  updateProductthunk,
} from '../../store/productsSlice';
const FORM_UPDATE = 'UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.inputId]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.inputId]: action.isValid,
    };
    return {
      ...state,
      inputValues: updatedValues,
      inputValidities: updatedValidities,
      formIsValid: action.isValid,
    };
  }
};

const EditProductScreen = props => {
  const dispatch = useDispatch();
  const prodId = props?.route?.params?.productId;
  const editedProduct = useSelector(state =>
    state?.products?.userProducts?.find(prod => prod.id === prodId),
  );

  const [formState, dispatchAction] = useReducer(formReducer, {
    inputValues: {
      title: editedProduct ? editedProduct.title : '',
      imageUrl: editedProduct ? editedProduct.imageUrl : '',
      description: editedProduct ? editedProduct.description : '',
      price: editedProduct ? editedProduct.price : '',
    },
    inputValidities: {
      title: editedProduct ? true : false,
      imageUrl: editedProduct ? true : false,
      description: editedProduct ? true : false,
      price: editedProduct ? true : false,
    },
    formIsValid: editedProduct ? true : false,
  });

  const submitHanlder = useCallback(() => {
    console.log('formState', formState);
    if (editedProduct) {
      dispatch(
        updateproduct({
          pid: prodId,
          title: formState.inputValues.title,
          description: formState.inputValues.description,
          imageUrl: formState.inputValues.imageUrl,
        }),
      );
      dispatch(
        updateProductthunk({
          pid: prodId,
          title: formState.inputValues.title,
          description: formState.inputValues.description,
          imageUrl: formState.inputValues.imageUrl,
        }),
      );
    } else {
      dispatch(
        createProductthunk({
          price: +formState.inputValues.price,
          title: formState.inputValues.title,
          description: formState.inputValues.description,
          imageUrl: formState.inputValues.imageUrl,
        }),
      );
    }
  }, [prodId, dispatch, formState]);

  useEffect(() => {
    props.navigation.setParams({submit: submitHanlder});
  }, [submitHanlder, prodId, dispatch, formState]);

  const inputChangeHandler = useCallback(
    (inputIdentifier, value, isValid) => {
      dispatchAction({
        type: FORM_UPDATE,
        value: value,
        isValid: isValid,
        inputId: inputIdentifier,
      });
    },
    [dispatchAction],
  );
  return (
    <ScrollView>
      <View style={styles.form}>
        <Input
          id="title"
          label="Title"
          keyboardType="default"
          autoCorrect
          autoCapitalize="sentences"
          returnKeyType="next"
          errorText="Please enter a valid title!"
          onInputChange={inputChangeHandler}
          initialValue={editedProduct ? editedProduct.title : ''}
          initiallyValid={!!editedProduct}
          required
        />

        <Input
          id="imageUrl"
          required
          label="ImageUrl"
          keyboardType="default"
          autoCorrect
          autoCapitalize="sentences"
          returnKeyType="next"
          errorText="Please enter a valid ImageUrl!"
          initialValue={editedProduct ? editedProduct.imageUrl : ''}
          initiallyValid={!!editedProduct}
          onInputChange={inputChangeHandler}
        />
        <Input
          id="description"
          minLength={5}
          required
          label="Description"
          keyboardType="default"
          autoCorrect
          autoCapitalize="sentences"
          returnKeyType="next"
          errorText="Please enter a valid description!"
          multiline
          numberOfLines={3}
          initialValue={editedProduct ? editedProduct.description : ''}
          initiallyValid={!!editedProduct}
          onInputChange={inputChangeHandler}
        />
        {editedProduct ? null : (
          <Input
            id="price"
            min={0}
            required
            label="Price"
            keyboardType="decimal-pad"
            autoCorrect
            autoCapitalize="sentences"
            returnKeyType="next"
            errorText="Please enter a valid Price!"
            onInputChange={inputChangeHandler}
          />
        )}
      </View>
    </ScrollView>
  );
};
export default EditProductScreen;
const styles = StyleSheet.create({
  form: {margin: 20},
});
