import React, {useReducer, useEffect, memo} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
const INPUT_CHANGE = 'INPUT_CHANGE';
const INPUT_BLUR = 'INPUT_BLUR';
const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    case INPUT_BLUR:
      return {...state, touched: true};
    default:
      return state;
  }
};

const Input = props => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue ? props.initialValue : '',
    isValid: props.initiallyValid,
    touched: false,
  });
  const {onInputChange} = props;
  useEffect(() => {
    if (inputState.touched) {
      props.onInputChange(props.id, inputState.value, inputState.isValid);
    }
  }, [onInputChange, inputState]);

  const textChangeHandler = text => {
    let isValid = true;
    if (props.required && text.trim().length === 0) {
      isValid = false;
    }

    if (props.min !== null && +text < props.min) {
      isValid = false;
    }

    if (props.max !== null && +text > props.max) {
      isValid = false;
    }
    if (props.minLength !== null && text.length < props.minLength) {
      isValid = false;
    }
    dispatch({type: INPUT_CHANGE, value: text, isValid: isValid});
  };
  const lostFocusHandler = () => {
    dispatch({type: INPUT_BLUR});
  };
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior="padding"
      keyboardVerticalOffset={100}>
      <View style={styles.formControl}>
        <Text style={styles.label}>{props.label}</Text>
        <TextInput
          {...props}
          style={styles.input}
          value={inputState.value}
          onChangeText={textChangeHandler}
          onBlur={lostFocusHandler}
        />
        {!inputState.isValid && inputState.touched && (
          <View>
            <Text>{props.errorText}</Text>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};
export default Input;
const styles = StyleSheet.create({
  formControl: {width: '100%'},
  label: {
    fontFamily: 'OpenSans-Bold',
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
