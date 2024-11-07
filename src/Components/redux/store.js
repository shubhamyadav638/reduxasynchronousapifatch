import {configureStore  } from "@reduxjs/toolkit";
import cardSlice from './slice';

const store = configureStore({
    reducer:{
        cards: cardSlice

    }
})

export default store;