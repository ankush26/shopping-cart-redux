import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart(state, action) {
      const exisingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (exisingIndex >= 0) {
        state.cartItems[exisingIndex].cartQuantity += 1;
        toast.info("Increased product Quantity", {
          position: "bottom-left",
        });
      } else {
        state.cartItems.push({ ...action.payload, cartQuantity: 1 });
        toast.success("Added a new product to cart", {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
