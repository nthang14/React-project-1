import { createSlice } from '@reduxjs/toolkit';
const collection = createSlice({
  name: 'collection',
  initialState: {
    collections: [],
    collectionDetail: {},
  },
  reducers: {
    getAllCollection: (state, action) => {
      state.collections = [...action.payload];
    },
    getCollectionDetail: (state, action) => {
      state.collectionDetail = action.payload;
    },
  },
});
const { actions, reducer } = collection;
export const { getAllCollection, getCollectionDetail } = actions;
export default reducer;
