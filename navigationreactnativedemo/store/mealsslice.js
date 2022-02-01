import {createSlice, nanoid} from '@reduxjs/toolkit';
import {MEALS} from '../data/dummydata';

const mealslice = createSlice({
  name: 'meals',
  initialState: {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
  },
  reducers: {
    incremenet: {
      reducer(state, action) {
        state.value += action.payload.value;
      },
      prepare(value = 1) {
        return {
          payload: {
            id: nanoid(),
            value: value,
          },
        };
      },
    },
    decrement(state, action) {
      state.value -= action.payload ?? 1;
    },
    setfilters(state, action) {
      const appliedFilters = action.payload;
      state.filteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) return false;
        return true;
      });
    },
    toogleFavorites(state, action) {
      const existingIndex = state.favoriteMeals.findIndex(
        meal => meal.id == action.payload,
      );
      if (existingIndex >= 0) {
        return;
      } else {
        const meal = state.meals.find(meal => meal.id === action.payload);

        state.favoriteMeals.push(meal);
      }
    },
  },
});
export const mealsliceActions = mealslice.actions;

export const selectMeals = state => state.meals.meals;
export const selectFavMeals = state => state.meals.favoriteMeals;
export const selecteFilteredMeals = state => state.meals.filteredMeals;
export default mealslice.reducer;
