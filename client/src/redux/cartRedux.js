import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      
     const isInArr =  state.products.find(product => {
     if ( product._id !== action.payload._id) {
        return false
     } else {
      product.quantity += 1
      return true
     } })
    
    if(!isInArr) {
      state.products.push(action.payload);
    } 
       
    state.total += action.payload.price * action.payload.quantity; 
    },
    removeProduct: (state, action) => {
      
      
      state.products = state.products.filter(
        (product) => product._id !== action.payload.id
      );
    },
    clearCart: (state) => {
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
