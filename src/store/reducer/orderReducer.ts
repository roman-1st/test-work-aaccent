import { OrderState, OrderActionTypes, OrderActions, OrderItem } from './../../types/order';


const initialState: OrderState = {
    orderItem: [],
    orderPrice: 0,
    orderCurrency: "USD",
    orderResult: null,
}

export const orderReducer = (state = initialState, action: OrderActions): OrderState => {
    switch (action.type) {
        case OrderActionTypes.ADD_TO_ORDER:
            const item: OrderItem = action.payload
            return {
                ...state,
                orderItem: [...state.orderItem, action.payload],
                orderPrice: Number((state.orderPrice + item.regular_price.value).toFixed(2))
            }
        case OrderActionTypes.REMOVE_FROM_ORDER:
            let priceRemove: number = 0
            state.orderItem.filter((item) => item.id !== action.payload).map(el => {
                priceRemove += el.regular_price.value
            })

            return {
                ...state,
                orderItem: state.orderItem.filter((item) => item.id !== action.payload),
                orderPrice: Number(priceRemove.toFixed(2)),
            };
        case OrderActionTypes.DECREASE_ORDER_ITEM:
            const removePrice: any = action.payload.regular_price.value
            const deletedItem = state.orderItem.findIndex(el => el.id === action.payload.id)
            const newOrderItem =
                state.orderItem.slice(0, deletedItem)
                    .concat(state.orderItem
                        .slice(deletedItem + 1));
            return {
                ...state,
                orderItem: [...newOrderItem],
                orderPrice: Number((state.orderPrice - removePrice).toFixed(2)),
            };

        case OrderActionTypes.INCREASE_ORDER_ITEM:
            const addPrice: any = action.payload.regular_price.value
            return {
                ...state,
                orderItem: [...state.orderItem, action.payload],
                orderPrice: Number((state.orderPrice + addPrice).toFixed(2)),
            };
        case OrderActionTypes.GET_ORDER_RESULT:
            return {
                ...state,
                orderResult: action.payload,
            }
        case OrderActionTypes.CLEAR_ORDER:

            return {
                ...state,
                orderItem: [],
                orderPrice: 0,
                orderResult: null,
            }
        default:
            return {
                ...state
            }
    }
}