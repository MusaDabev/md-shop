import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourite",
  initialState: {
    products: [],
    quantity: 0,
  },
  reducers: {
    addProductToFav: (state, action) => {
      
      const isInArr =  state.products.find(product => {
      if ( product._id !== action.payload._id) {
         return false
      } else {
        return true
      } })
     
     if(!isInArr) {
       state.products.push(action.payload);
     } 
    },
    removeFavourite: (state, action) => {
      
      
      state.products = state.products.filter(
        (product) => product._id !== action.payload.id
      );
    },
    clearFavourites: (state) => {
      state.products = [];
    }
  },
});

export const { addProductToFav, removeFavourite, clearFavourites } = favouriteSlice.actions;
export default favouriteSlice.reducer;