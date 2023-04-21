
import { useTypedSelector } from './../../hooks/useTypedSelector';
import { ProductsActionTypes, ProductState } from './../../types/products';


export const getProductAction = (products: ProductState) => {
    return {type: ProductsActionTypes.GET_ALL_PRODUCT, payload: products}
}

export const addBrandToFilterAction = (brandNum: number) => {
    return {type: ProductsActionTypes.ADD_BRAND_TO_FILTER, payload: brandNum}
}

export const removeBrandFromFilterAction = (brandNum: number) => {
    return {type: ProductsActionTypes.REMOVE_BRAND_FROM_FILTER, payload: brandNum}
}

export const goToNextPageAction = () => {
    return {type: ProductsActionTypes.GO_TO_NEXT_PAGE}
}

export const goToPreviousPageAction = () => {
    return {type: ProductsActionTypes.GO_TO_PREVIOUS_PAGE}
}


