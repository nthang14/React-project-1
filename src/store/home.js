import { createSlice } from '@reduxjs/toolkit';
const home = createSlice({
  name: 'home',
  initialState: {
    setting: [],
  },
  reducers: {
    getConfig: (state, action) => {
      state.setting = action.payload;
    },
  },
});
const { actions, reducer } = home;
export const { getConfig } = actions;
export default reducer;
