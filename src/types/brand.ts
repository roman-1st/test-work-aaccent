export interface BrandsState{
    brands: any[],
    viewBrands: boolean,
}

export interface BrandList {
    id: number,
    title: string,
    sort: string,
    code: string,
    checked: boolean;
    onChange: (checked: boolean) => void;
}

export enum BrandsActionsTypes {
    ADD_BRANDS = "ADD_BRANDS",
    VIEW_BRANDS = "VIEW_BRANDS"
}

interface addBrandsAction {
    type: BrandsActionsTypes.ADD_BRANDS,
    payload: any[],
}

interface viewBrandsAction {
    type: BrandsActionsTypes.VIEW_BRANDS,
}

export type BrandsActions = 
addBrandsAction |
viewBrandsAction