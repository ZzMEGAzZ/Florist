import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrderItems, Item } from './@types';

export const checkoutSlice = createSlice({
    name: 'checkout',
    initialState: {
        Items: [] as Item[],
    } as OrderItems,
    reducers: {
        addItems: (state, action: PayloadAction<OrderItems>) => {
            state.Items.push(...action.payload.Items);
        },
        removeItem: (state, action: PayloadAction<number>) => {
            state.Items = state.Items.filter(item => item.product_id !== action.payload);
        },
        clearItems: (state) => {
            state.Items = [];
        },
    },
});

export const { addItems, removeItem, clearItems } = checkoutSlice.actions;
export const checkoutSelector = (state: { checkout: OrderItems }) => state.checkout;
export default checkoutSlice.reducer;
