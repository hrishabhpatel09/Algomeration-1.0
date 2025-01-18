import {configureStore} from '@reduxjs/toolkit';
import generalReducers from './general.slice.js';

const store = configureStore({

    reducer: {
        general:generalReducers
    }
})

export {store};