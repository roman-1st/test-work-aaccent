import { ProductState, Product, ProductsActions, ProductsActionTypes } from './../../types/products';

let initialState: ProductState = {
    getAllProducts: [],
    brands_filter: [],
    pageIndex: 0,
    pageProduct: 1,
}

export const productsReducer = (state = initialState, action: ProductsActions): ProductState => {
    switch(action.type) {
        case ProductsActionTypes.GET_ALL_PRODUCT:
            return {
                ...state,
                getAllProducts: action.payload,
            }
        case ProductsActionTypes.REMOVE_BRAND_FROM_FILTER:
            return {
                ...state,
                brands_filter: state.brands_filter.filter((brand) => brand !== action.payload),
            }
        case ProductsActionTypes.ADD_BRAND_TO_FILTER: 
            return {
                ...state,
                brands_filter: [...state.brands_filter, action.payload]
            }
        case ProductsActionTypes.GO_TO_NEXT_PAGE:
            return {
                ...state,
                pageProduct: state.pageProduct + 1
            }
        case ProductsActionTypes.GO_TO_PREVIOUS_PAGE:
            return {
                ...state,
                pageProduct: state.pageProduct - 1
            }
        default:
            return {
                ...state,
            }
    }
}
