import {
    createSlice,
    PayloadAction,
} from "@reduxjs/toolkit";

import { Product } from "../types/Product";

const initialState: Product[] = [];

const cartSlice = createSlice({
    name: 'cart',

    initialState,

    reducers: {
        addToCart: (
            state,
            action: PayloadAction<Product>
        ) => {
            const itemIndex = state.findIndex(
                item => item.id === action.payload.id
            );

            if (itemIndex !== -1) {
                state[itemIndex].quantity++;
            } else {
                state.push(action.payload);
            }
        },
        removeFromCart: (
            state,
            action: PayloadAction<number>
        ) => {
            return state.filter(
                item => item.id !== action.payload
            );
        },

        clearCart: () => [],
    }


});

export const {
    addToCart,
    removeFromCart,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;