import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      //Redux is using Immer library under the hood to ensure immutable data

      //This is describing the mutation to the state
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },

    reset: (state) => {
      state.count = 0;
    },
    increment2: (state) => {
      state.count += 2;
    },
  },
});

export const { increment, decrement, reset, increment2 } = counterSlice.actions;

//Export the reducer function from the slice
export default counterSlice.reducer;
