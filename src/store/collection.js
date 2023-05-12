import { createSlice } from '@reduxjs/toolkit';
const collection = createSlice({
  name: 'collection',
  initialState: {
    collections: [],
  },
  reducers: {
    getAllCollection: (state, action) => {
      state.collections = [...action.payload];
    },
  },
});
const { actions, reducer } = collection;
export const { getAllCollection } = actions;
export default reducer;
