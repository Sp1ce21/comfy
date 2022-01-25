import { productsAPI } from './../api/api';

const GET_PRODUCTS = 'GET_PRODUCTS'

let initialState = {
    products: [] as Array<productsObject>,
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


export type productsObject = {
    category: string
    id: number
    description: string
    image: string
    price: number
    rating: {
        rate: number
        count: number
    }
    title: string
}

type actionsTypes = {
    type: string
    products: Array<productsObject>
}

type productsType = {
    type: typeof GET_PRODUCTS,
    products: Array<productsObject>
}

export const setProducts = (products: Array<productsObject>): productsType => ({ type: GET_PRODUCTS, products })


type responseType = {
    data: Array<productsObject>
    headers: any
    status: number
    statusText: string
    config: Object
}

export const getProductsAC = () => async (dispatch: any) => {
    let response: responseType = await productsAPI.getProducts();
    console.log(response)
    dispatch(setProducts(response.data));
}





export default productsReducer;