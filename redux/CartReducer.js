import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState:{
        cart: []
    },
    reducers:{
        addToCart : (state, action) => {
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            if(itemPresent){
                itemPresent.quantity++; // if item already present, increment it
            }else{
                state.cart.push({...action.payload, quantity: 1}) // on pressing first time, just make it 1
            }
        },
        removeFromCart : (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
            state.cart = removeItem;
        },
        incrementQuantity : (state, action) => { // + button
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            itemPresent.quantity++;
        },
        decrementQuantity : (state, action) => { // - button
            const itemPresent = state.cart.find((item) => item.id === action.payload.id);
            if(itemPresent.quantity == 1){ // decrementing condition when there is only one item
                const removeItem = state.cart.filter((item) => item.id !== action.payload.id);
                state.cart = removeItem;
            }else {
                itemPresent.quantity--;
            }
        },
        cleanCart: (state) => {
            state.cart = []
        }
    }
})

export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, cleanCart} = cartSlice.actions;

export default cartSlice.reducer