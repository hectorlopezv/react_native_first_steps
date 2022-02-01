// Import the RTK Query methods from the React-specific entry point
import {createEntityAdapter} from '@reduxjs/toolkit';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState();
// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
  // The "endpoints" represent operations and requests for this server
  tagTypes: ['Post'],
  endpoints: builder => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getPosts: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: () => '/posts',
      providesTags: (result = [], error, arg) => [
        'Post',
        ...result.map(({id}) => ({type: 'Post', id})),
      ],
      transformResponse: responseData => {
        return usersAdapter.setAll(initialState, responseData);
      },
    }),
    getPost: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: postId => `/posts/${postId}`,
      invalidatesTags: ['Post'],
    }),
    getUsers: builder.query({
      query: () => '/users',
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const {useGetPostsQuery, useGetPostQuery, useGetUsersQuery} = apiSlice;
