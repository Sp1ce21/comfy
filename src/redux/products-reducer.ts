import { arrayShift } from 'redux-form';
import { productsAPI } from './../api/api';

const GET_PRODUCTS = 'GET_PRODUCTS'
const SET_PRICE = 'SET_PRICE'
const SET_SEARCH = 'SET_SEARCH'
const SET_MIN_PRICE = 'SET_MIN_PRICE'
const SET_MAX_PRICE = 'SET_MAX_PRICE'

let initialState = {
    products: [] as Array<productsObject>,
    price: 100 as number,
    search: '' as string,
    minPrice: 0 as number,
    maxPrice: 100 as number,
};

export type initialStateType = typeof initialState;



type actionsTypes = {
    type: string
    products: Array<productsObject>
    price: number
    search: string
    minPrice: number
    maxPrice: number
}

const productsReducer = (state = initialState, action: actionsTypes): initialStateType => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.products
            }
        case SET_PRICE:
            return {
                ...state,
                price: action.price
            }
        case SET_SEARCH:
            return {
                ...state,
                search: action.search
            }
        case SET_MIN_PRICE:
            return {
                ...state,
                minPrice: action.minPrice
            }
        case SET_MAX_PRICE:
            return {
                ...state,
                maxPrice: action.maxPrice
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



type productsType = {
    type: typeof GET_PRODUCTS,
    products: Array<productsObject>
}
export const setProducts = (products: Array<productsObject>): productsType => ({ type: GET_PRODUCTS, products })

type priceType = {
    type: typeof SET_PRICE,
    price: number
}
export const setPrice = (price: number): priceType => ({ type: SET_PRICE, price })


type searchType = {
    type: typeof SET_SEARCH,
    search: string
}
export const setSearch = (search: string): searchType => ({ type: SET_SEARCH, search })


type findMinPriceType = {
    type: typeof SET_MIN_PRICE,
    minPrice: number
}
const findMinPrice = (minPrice: number): findMinPriceType => ({ type: SET_MIN_PRICE, minPrice })


type findMaxPriceType = {
    type: typeof SET_MAX_PRICE,
    maxPrice: number
}
const findMaxPrice = (maxPrice: number): findMaxPriceType => ({ type: SET_MAX_PRICE, maxPrice })


// type responseType = {
//     data: Array<productsObject>
//     headers: any
//     status: number
//     statusText: string
//     config: Object
// }

export const getProductsAC = () => async (dispatch: any) => {
    let response = await productsAPI.getProducts();
    dispatch(setProducts(response.data));

    let array = []
    for (let elem of response.data) {
        array.push(elem.price)
    }
    array.sort(function (a, b) {
        return a - b;
    });
    dispatch(findMinPrice(Math.floor(array[0])));
    dispatch(findMaxPrice(Math.ceil(array[array.length - 1])));
}





export default productsReducer;