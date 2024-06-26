import {combineReducers, configureStore} from "@reduxjs/toolkit";
import productsReducer from "./reducers/products-slice";
import orderReducer from "./reducers/order-slice";
import snackbarReducer from "./reducers/snackbar-slice";

const rootReducer = combineReducers({
    productsReducer,
    orderReducer,
    snackbarReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']