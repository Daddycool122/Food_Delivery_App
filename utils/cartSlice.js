import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {   // Corrected typo here
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // mutating the state here
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart: () => {
            // state.items.length = 0;
            return {items:[]}
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
