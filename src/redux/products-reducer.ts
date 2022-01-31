import { Dispatch } from 'redux';
import { productsAPI } from './../api/api';

const GET_PRODUCTS = 'GET_PRODUCTS'
const SET_PRICE = 'SET_PRICE'
const SET_SEARCH = 'SET_SEARCH'
const SET_MIN_PRICE = 'SET_MIN_PRICE'
const SET_MAX_PRICE = 'SET_MAX_PRICE'
const SET_CATEGORIES = 'SET_CATEGORIES'
const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY'
const SET_IS_BASKET = 'SET_IS_BASKET'
const SET_ADDED_PRODUCTS = 'SET_ADDED_PRODUCTS'
const SET_ADDED_PRODUCT_FROM_LOCAL_STORAGE = 'SET_ADDED_PRODUCT_FROM_LOCAL_STORAGE'
const CLEAR_ADDED_PRODUCTS = 'CLEAR_ADDED_PRODUCTS'
const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE'
const CLEAR_TOTAL_PRICE = 'CLEAR_TOTAL_PRICE'
const SET_INCREASE_PRODUCT_QUANTITY = 'SET_INCREASE_PRODUCT_QUANTITY'
const SET_DECREASE_PRODUCT_QUANTITY = 'SET_DECREASE_PRODUCT_QUANTITY'
const SET_IS_ALL_PRODUCTS = 'SET_IS_ALL_PRODUCTS'

let initialState = {
    products: [] as Array<productsObject>,
    price: 500 as number,
    search: '' as string,
    minPrice: 0 as number,
    maxPrice: 500 as number,
    categories: ['All'] as Array<string>,
    currentCategory: 'All' as string,
    isBasket: false as boolean,
    addedProducts: [] as any,
    totalPrice: 0 as number,
    isAllProducts: false as boolean
};

export type initialStateType = typeof initialState;



type actionsTypes = {
    type: string
    products: Array<productsObject>
    price: number
    search: string
    minPrice: number
    maxPrice: number
    categories: Array<string>
    currentCategory: string
    isBasket: boolean
    addedProducts: any
    totalPrice: number
    id: number
    isAllProducts: boolean
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
        case SET_CATEGORIES:
            return {
                ...state,
                categories: ['All', ...action.categories]
            }
        case SET_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory
            }
        case SET_IS_BASKET:
            return {
                ...state,
                isBasket: action.isBasket
            }
        case SET_ADDED_PRODUCTS:
            return {
                ...state,
                addedProducts: [...state.addedProducts, action.addedProducts]
            }
        case SET_ADDED_PRODUCT_FROM_LOCAL_STORAGE:
            return {
                ...state,
                addedProducts: action.addedProducts
            }
        case CLEAR_ADDED_PRODUCTS:
            return {
                ...state,
                addedProducts: []
            }
        case SET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: state.totalPrice + action.totalPrice
            }
        case CLEAR_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: 0
            }
        // case SET_INCREASE_PRODUCT_QUANTITY:
        //     return {
        //         ...state,
        //     }
        // case SET_DECREASE_PRODUCT_QUANTITY:
        //     return {
        //         ...state,
        //     }
        case SET_IS_ALL_PRODUCTS:
            return {
                ...state,
                isAllProducts: !state.isAllProducts
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


type setCategoriesType = {
    type: typeof SET_CATEGORIES,
    categories: Array<string>
}
const __setCategories = (categories: Array<string>): setCategoriesType => ({ type: SET_CATEGORIES, categories })


type setCurrentCategoryType = {
    type: typeof SET_CURRENT_CATEGORY,
    currentCategory: string
}
export const setCurrentCategory = (currentCategory: string): setCurrentCategoryType => ({ type: SET_CURRENT_CATEGORY, currentCategory })


type setIsBasketType = {
    type: typeof SET_IS_BASKET,
    isBasket: boolean
}
export const setIsBasket = (isBasket: boolean): setIsBasketType => ({ type: SET_IS_BASKET, isBasket })


type addedProductsType = {
    type: typeof SET_ADDED_PRODUCTS,
    addedProducts: any
}
export const setAddedProducts = (addedProducts: any): addedProductsType => ({ type: SET_ADDED_PRODUCTS, addedProducts })


type addedProductsFromLocalStorageType = {
    type: typeof SET_ADDED_PRODUCT_FROM_LOCAL_STORAGE,
    addedProducts: any
}
export const setAddedProductsFromLocalStorage = (addedProducts: any): addedProductsFromLocalStorageType => ({ type: SET_ADDED_PRODUCT_FROM_LOCAL_STORAGE, addedProducts })

type clearAddedProductsType = {
    type: typeof CLEAR_ADDED_PRODUCTS,
}
export const clearAddedProducts = (): clearAddedProductsType => ({ type: CLEAR_ADDED_PRODUCTS })


type setTotalPriceType = {
    type: typeof SET_TOTAL_PRICE,
    totalPrice: number
}
export const setTotalPrice = (totalPrice: number): setTotalPriceType => ({ type: SET_TOTAL_PRICE, totalPrice })


type clearTotalPriceType = {
    type: typeof CLEAR_TOTAL_PRICE,
}
export const clearTotalPrice = (): clearTotalPriceType => ({ type: CLEAR_TOTAL_PRICE })

type setIncreaseProductQuantityType = {
    type: typeof SET_INCREASE_PRODUCT_QUANTITY,
    id: number
}
export const increaseProductQuantity = (id: number): setIncreaseProductQuantityType => ({ type: SET_INCREASE_PRODUCT_QUANTITY, id })

type setDecreaseProductQuantityType = {
    type: typeof SET_DECREASE_PRODUCT_QUANTITY,
    id: number
}
export const decreaseProductQuantity = (id: number): setDecreaseProductQuantityType => ({ type: SET_DECREASE_PRODUCT_QUANTITY, id })


type setIsAllProductsType = {
    type: typeof SET_IS_ALL_PRODUCTS,
}
export const setIsAllProducts = (): setIsAllProductsType => ({ type: SET_IS_ALL_PRODUCTS })




export const getProductsAC = () => async (dispatch: Dispatch<productsType | findMinPriceType | findMaxPriceType | priceType>) => {
    let response = await productsAPI.getProducts();
    dispatch(setProducts(response.data));

    let array = []
    for (let elem of response.data) {
        array.push(elem.price)
    }
    array.sort(function (a, b) {
        return a - b;
    });
    const maxPrice = Math.ceil(array[array.length - 1]);
    dispatch(findMinPrice(Math.ceil(array[0])));
    dispatch(findMaxPrice(maxPrice));
    dispatch(setPrice(maxPrice));
}


export const getCategoriesAC = () => async (dispatch: Dispatch<setCategoriesType>) => {
    let response = await productsAPI.getCategories();
    dispatch(__setCategories(response.data));
}



export default productsReducer;