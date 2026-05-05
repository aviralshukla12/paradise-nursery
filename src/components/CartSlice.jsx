import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }

      state.totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
      state.totalItems = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === productId
      );

      if (existingItem) {
        existingItem.quantity += 1;
        state.totalItems += 1;
        state.totalPrice += existingItem.price;
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === productId
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalItems -= 1;
        state.totalPrice -= existingItem.price;
      }
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === productId
      );

      if (existingItem) {
        state.totalItems -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
        existingItem.quantity = Math.max(1, quantity);
        state.totalItems += existingItem.quantity;
        state.totalPrice += existingItem.price * existingItem.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  updateQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
