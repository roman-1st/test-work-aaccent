import { getOrderResultAction } from './order-actions';
import { OrderActions, OrderState, OrderItem, OrderActionTypes } from './../../types/order';
import { ProductsActions, ProductsActionTypes } from './../../types/products';
import { BrandsActions, BrandsActionsTypes } from './../../types/brand';

import { Dispatch } from "redux"
import axios from 'axios';

export const fetchBrands = () => {
    return async (dispatch: Dispatch<BrandsActions>) => {
        try {
            const response = await axios.get("http://localhost:3000/assets/brands.json")
            dispatch({type: BrandsActionsTypes.ADD_BRANDS, payload: response.data})
        } catch (e: any) {
            console.log(e.message);
        }
    }
}

export const fetchPoducts = () => {
    return async (dispatch: Dispatch<ProductsActions>) => {
        try {
            const response = await axios.get("http://localhost:3000/assets/products.json")
            dispatch({type: ProductsActionTypes.GET_ALL_PRODUCT, payload: response.data})
        } catch (e: any) {
            console.log(e.message);
        }
    }
}

export const fetchOrder = (orderItem: OrderItem[]) => {
    return async (dispatch: Dispatch<OrderActions>) => {
        try {
            const jsonOrder = JSON.stringify(orderItem)
            const response = await axios.post(
                "https://app.aaccent.su/js/confirm.php ", 
                jsonOrder
            )
            console.log(response.data);
            dispatch({type: OrderActionTypes.GET_ORDER_RESULT, payload: response.data}) 
        } catch (e:any) {
            console.log(e.message);
        }
    }
}
