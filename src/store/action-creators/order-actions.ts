import { OrderItem } from './../../types/order';
import { OrderActionTypes, OrderResult } from "../../types/order";
import { Product } from "../../types/products";

export const addToOrderAction = (item : OrderItem) => {
    return {type: OrderActionTypes.ADD_TO_ORDER, payload: item}
}

export const decreaseOrderItemAction = (item: OrderItem) => {
    return { type: OrderActionTypes.DECREASE_ORDER_ITEM, payload: item };
};

export const increaseOrderItemAction = (item: OrderItem) => {
    return { type: OrderActionTypes.INCREASE_ORDER_ITEM, payload: item };
};

export const removeFromOrderAction = (item: number) => {
    return { type: OrderActionTypes.REMOVE_FROM_ORDER, payload: item };
};

export const getOrderResultAction = (result: OrderResult) => {
    return {type: OrderActionTypes.GET_ORDER_RESULT, payload: result }
}

export const clearOrderAction = () => {
    return {type: OrderActionTypes.CLEAR_ORDER}
}