import React from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {actions, selectCount} from './store/counterSlice';
import {fetchPosts, selectData, selectError} from './store/netTextSlice';
const App = () => {
  const value = useSelector(selectCount);
  const endpointData = useSelector(selectData);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const postHandler = () => {
    dispatch(fetchPosts());
  };
  return (
    <View>
      <Text>React Native Debugger Testing</Text>
      <Text>{value}</Text>
      {!!error && <Text>Error on EndPoint</Text>}
      <Button
        styles={styles.incremenet}
        title="Increment"
        onPress={() => dispatch(actions.incremenet())}
        color="#841584"
      />
      <View style={styles.br}></View>
      <Button title="Get Posts" onPress={postHandler} styles={styles.get} />
      {!!endpointData &&
        endpointData?.map(el => <Text key={el.id}>{el.title}</Text>)}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  br: {
    marginVertical: 15,
  },
});
