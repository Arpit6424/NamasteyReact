import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //Vanilla(older Redux) => DON'T MUTATE STATE,returning is
      //const newState = [...state];
      //newState.items.push(action.payload);
      //return newState;

      //Redux Toolkit
      //We have to mutate the state directly
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
      //state = []//this is different thing
      // state.items = [];
      // return state;

      //you can just do this
      // return []
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
