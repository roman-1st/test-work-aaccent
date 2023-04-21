import React from "react";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import './ShoppingBasket.css'

const ShoppingBasket = () => {
    const {orderItem, orderPrice, orderCurrency} = useTypedSelector(state => state.order)

    return (
        <div className="ShoppingBasket">
            <p> Позиций в корзине: {orderItem.length} </p>
            <p> На сумму: {orderPrice} {orderCurrency} </p>
            <Link to="/сheckout-order">
                <button> Перейти к заказу </button>
            </Link>
        </div>
    )
}

export default ShoppingBasket