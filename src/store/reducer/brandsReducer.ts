import { BrandsState, BrandsActions, BrandsActionsTypes } from './../../types/brand';

const initialState: BrandsState = {
    brands: [],
    viewBrands: true,
}

export const brandsReducer = (state = initialState, action: BrandsActions): BrandsState => {
    switch(action.type) {
        case BrandsActionsTypes.ADD_BRANDS:
            return {
                ...state,
                brands: action.payload,
            }
        case BrandsActionsTypes.VIEW_BRANDS:
            console.log(state.viewBrands);
            if(state.viewBrands === false) return { ...state, viewBrands: true }
            if(state.viewBrands === true) return { ...state, viewBrands: false }
            return {
                ...state,
            }

        default:
            return {...state}
    }
}