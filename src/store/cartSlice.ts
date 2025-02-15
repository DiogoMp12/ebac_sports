import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Produto } from '../App';

interface CartState {
  items: Produto[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCart: (state, action: PayloadAction<Produto>) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { toggleCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
