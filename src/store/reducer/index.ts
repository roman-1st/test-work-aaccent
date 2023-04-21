import { orderReducer } from './orderReducer';
import { combineReducers } from "redux";
import { brandsReducer } from "./brandsReducer";
import { productsReducer } from "./productsReducer";

export const rootReducer = combineReducers({
    product: productsReducer,
    brand: brandsReducer,
    order: orderReducer,
})

export type RootState = ReturnType<typeof rootReducer>