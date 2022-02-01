import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('data/getPosts', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: null,
    error: null,
    status: null,
  },
  reducers: {
    add(state, action) {},
    // incremenet: {
    //   reducer(state, action) {
    //     state.value += action.payload.value;
    //   },
    //   prepare(value = 1) {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         value: value,
    //       },
    //     };
    //   },
    // },
    // decrement(state, action) {
    //   state.value -= action.payload ?? 1;
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Add any fetched posts to the array
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const actions = dataSlice.actions;

export const selectData = state => state.data.data;

export const selectError = state => state.data.error;

export default dataSlice.reducer;
