import React, { useEffect } from "react";
import ProductElement from "./ProductElement/ProductElement";
import './ProductContainer.css'
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Product } from "../../types/products";
import { useActions } from "../../hooks/useActions";

const ProductContainer = () => {
    const {
        getAllProducts, 
        pageProduct,
        brands_filter,
     } = useTypedSelector(state => state.product)

    const {
        goToNextPageAction, 
        goToPreviousPageAction
    } = useActions()

    function nextPage () {
        goToNextPageAction()
    }
 
    function previousPage () {
        goToPreviousPageAction()
    }
    
    const lastIndex = pageProduct * 6;
    const firstIndex = lastIndex - 6;

    const filteredProducts: Product[] = brands_filter.length
    ? getAllProducts.filter((product) =>
        brands_filter.includes(product.brand)
      )
    : getAllProducts;

    const currentProducts = filteredProducts.slice(firstIndex, lastIndex);

    return (
        <div className="mainContainer">
            <div className="ProductContainer">
                { currentProducts.map ( el => 
                    <ProductElement key={el.id} product={el} />
                )}
            </div>
            <div className="changePages">
                <button 
                onClick={ () => previousPage()}
                className="changePageButton" 
                disabled={ pageProduct === 1 ? true : false} 
                style={{alignContent: 'center'}}> 
                    Предыдущая страница
                </button>

                <p> {pageProduct} </p>
                <button 
                className="changePageButton" 
                onClick={ () => nextPage()}
                style={{alignContent: 'center'}}> 
                   Следующая страница
                </button>
            </div>
        </div>
    )
}

export default ProductContainer