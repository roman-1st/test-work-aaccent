export interface OrderState {
    orderItem: OrderItem[],
    orderPrice: number,
    orderCurrency: string,
    orderResult: OrderResult | null
}

export interface OrderResult {
    result: string,
}

export interface OrderItem {
    id: number,
    title: string,
    regular_price: {
        currency: string,
        value: number,
    },
    image: string,
    brand: number,
}

export enum OrderActionTypes {
    ADD_TO_ORDER = "ADD_TO_ORDER",
    DECREASE_ORDER_ITEM = "DECREASE_ORDER_ITEM",
    INCREASE_ORDER_ITEM = "INCREASE_ORDER_ITEM",
    REMOVE_FROM_ORDER = "REMOVE_FROM_ORDER",
    GET_ORDER_RESULT = "GET_ORDER_RESULT",
    CLEAR_ORDER = "CLEAR_ORDER"
}

interface addToOrderAction {
    type: OrderActionTypes.ADD_TO_ORDER,
    payload: OrderItem,
}

interface decreaseOrderItemAction {
    type: OrderActionTypes.DECREASE_ORDER_ITEM,
    payload: OrderItem
}

interface increaseOrderItemAction {
    type: OrderActionTypes.INCREASE_ORDER_ITEM,
    payload: OrderItem,
}

interface removeFromOrderAction {
    type: OrderActionTypes.REMOVE_FROM_ORDER,
    payload: number,
}

interface getOrderResultAction {
    type: OrderActionTypes.GET_ORDER_RESULT,
    payload: OrderResult,
}

interface clearOrderAction {
    type: OrderActionTypes.CLEAR_ORDER,
}

export type OrderActions =
    addToOrderAction |
    decreaseOrderItemAction |
    increaseOrderItemAction |
    removeFromOrderAction |
    getOrderResultAction |
    clearOrderAction