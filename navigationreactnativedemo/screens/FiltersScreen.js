import React, {useState, useLayoutEffect, useCallback} from 'react';
import {View, StyleSheet, Text, Switch} from 'react-native';
import {useDispatch} from 'react-redux';
import Colors from '../constants/Colors';
import mealsslice, {mealsliceActions} from '../store/mealsslice';

const FiltersScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [isGlutenFree, setisGlutenFree] = useState(false);
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
    };
    dispatch(
      mealsliceActions.setfilters({
        ...appliedFilters,
      }),
    );
  }, [isGlutenFree]);

  useLayoutEffect(() => {
    navigation.setParams({
      save: saveFilters,
    });
  }, [navigation, saveFilters]);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <View style={styles.filterContainer}>
        <Text>Gluten-free</Text>
        <Switch
          trackColor={{true: Colors.primaryColor}}
          thumbColor={Colors.primaryColor}
          value={isGlutenFree}
          onValueChange={newValue => setisGlutenFree(newValue)}
        />
      </View>
    </View>
  );
};
export default FiltersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
  },
});
