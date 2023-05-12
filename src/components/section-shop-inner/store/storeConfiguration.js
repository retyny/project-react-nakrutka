import {configureStore} from "@reduxjs/toolkit";
import pageReducer from "../reducers/pageReducer";


const store = configureStore({
    reducer:{
        page: pageReducer,
        icon: pageReducer
    },

});

export default store;