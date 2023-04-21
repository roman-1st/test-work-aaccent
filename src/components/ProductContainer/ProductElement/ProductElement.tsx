import React from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { OrderItem } from "../../../types/order";
import { Product } from "../../../types/products";
import "./ProductElement.css"

const ProductElement = (product: any) => {
    const el: OrderItem = product.product
    const {addToOrderAction } = useActions()
    
    function addToOrder () {
        addToOrderAction(el)
    }

    return (
        <div className="ProductElement">
            <p className="title"> {el.title} </p>
            <img style={{width: '250px'}} src={el.image}/>
            <div className="priceContainer">
                <p className="price"> {el.regular_price.value} {el.regular_price.currency}</p>
                <button className="btnAddToOrder" onClick={ () => addToOrder()}> 
                    Добавить в 
                    <img src="https://img.icons8.com/ios/512/add-shopping-cart--v1.png" width={'20px'}/>
                </button>
            </div>
        </div>
    )
}

export default ProductElement