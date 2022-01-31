import React, {useMemo} from 'react';

import {View, Text, Button, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useGetPostQuery, useGetPostsQuery} from './store/apislice';
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
  const {
    data: posts = [],
    isLoading,
    isSuccess,
    isError,
    refetch,
    error: error2,
  } = useGetPostsQuery();

  const sortedPosts = useMemo(() => {
    const sortedPosts = posts.slice();
    // Sort posts in descending chronological order
    sortedPosts.reverse();
    return sortedPosts;
  }, [posts]);
  const {
    data: post,
    isFetching: fethcing,
    isSuccess: sucess,
  } = useGetPostQuery(1);

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
      <Button
        title="refetch Data"
        onPress={() => {
          refetch();
        }}
      />
      <Button title="Get Posts" onPress={postHandler} styles={styles.get} />
      {!!sucess && <Text style={{color: 'red'}}>{post.title}</Text>}
      {!!endpointData &&
        endpointData?.map(el => <Text key={el.id}>{el.title}</Text>)}
      {!!isSuccess &&
        sortedPosts?.map(el => <Text key={el.id}>{el.title}</Text>)}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  br: {
    marginVertical: 15,
  },
});
