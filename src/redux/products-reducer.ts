// import { appStateType } from './store';
import { productsAPI } from './../api/api';

const GET_PRODUCTS = 'GET_PRODUCTS'

let initialState = {
    products: [] as Array<any>,
    test: "hello" as string
};

export type initialStateType = typeof initialState;

const productsReducer = (state = initialState, action: actionsTypes): initialStateType => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        default: return state;
    }
}

type actionsTypes = {
    type: string
    products: Array<any>
}

type productsType = {
    type: typeof GET_PRODUCTS,
    products: Array<any>
}

export const setProducts = (products: any): productsType => ({ type: GET_PRODUCTS, products })


export const getProductsAC = () => async (dispatch: any) => {
    let response: any = await productsAPI.getProducts();
    // debugger
    dispatch(setProducts(response.data));
}





export default productsReducer;