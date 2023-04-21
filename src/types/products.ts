export interface ProductState {
    getAllProducts: Product[],
    brands_filter: number[],

    pageIndex: number;
    pageProduct: number,
}

export interface Product {
    type: string,
    id: number,
    sku: string,
    title: string,
    regular_price: {
      currency: string,
      value: number
    },
    image: string,
    brand: number,
}

export enum ProductsActionTypes{
    GET_ALL_PRODUCT = "GET_ALL_PRODUCT",
    ADD_BRAND_TO_FILTER = "ADD_BRAND_TO_FILTER",
    REMOVE_BRAND_FROM_FILTER = "REMOVE_BRAND_FROM_FILTER",

    GO_TO_NEXT_PAGE = "GO_TO_NEXT_PAGE",
    GO_TO_PREVIOUS_PAGE = "GO_TO_PREVIOUS_PAGE",
}

interface getProductAction {
    type: ProductsActionTypes.GET_ALL_PRODUCT,
    payload: any[],
}

interface addBrandToFilterAction {
    type: ProductsActionTypes.ADD_BRAND_TO_FILTER,
    payload: number,
}

interface removeBrandFromFilterAction {
    type: ProductsActionTypes.REMOVE_BRAND_FROM_FILTER,
    payload: number,
}

interface goToNextPageAction {
    type: ProductsActionTypes.GO_TO_NEXT_PAGE,
}

interface goToPreviousPageAction {
    type: ProductsActionTypes.GO_TO_PREVIOUS_PAGE,
}


export type ProductsActions = 
getProductAction |
addBrandToFilterAction |
removeBrandFromFilterAction |
goToNextPageAction |
goToPreviousPageAction
