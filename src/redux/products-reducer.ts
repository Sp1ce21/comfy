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
const SET_IS_ALL_PRODUCTS = 'SET_IS_ALL_PRODUCTS'
const CHANGE_ADDED_PRODUCTS = 'CHANGE_ADDED_PRODUCTS'
const SET_CURRENT_ITEM_ID = 'SET_CURRENT_ITEM_ID'
const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM'
const SET_IS_FETCHING = 'SET_IS_FETCHING'

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
    isAllProducts: false as boolean,
    currentItemId: null as number | null,
    currentItem: {} as productsObject,
    isFetching: false as boolean
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
    currentItemId: number | null
    currentItem: productsObject
    isFetching: boolean
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
        case CHANGE_ADDED_PRODUCTS:
            return {
                ...state,
                addedProducts: action.addedProducts
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

        case SET_IS_ALL_PRODUCTS:
            return {
                ...state,
                isAllProducts: !state.isAllProducts
            }
        case SET_CURRENT_ITEM_ID:
            return {
                ...state,
                currentItemId: action.currentItemId
            }
        case SET_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.currentItem
            }
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
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


type changeAddedProductsType = {
    type: typeof CHANGE_ADDED_PRODUCTS,
    addedProducts: any
}
export const changeAddedProducts = (addedProducts: any): changeAddedProductsType => ({ type: CHANGE_ADDED_PRODUCTS, addedProducts })


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


type setIsAllProductsType = {
    type: typeof SET_IS_ALL_PRODUCTS,
}
export const setIsAllProducts = (): setIsAllProductsType => ({ type: SET_IS_ALL_PRODUCTS })



type setCurrentItemIdType = {
    type: typeof SET_CURRENT_ITEM_ID,
    currentItemId: number | null
}
export const setCurrentItemId = (currentItemId: number | null): setCurrentItemIdType => ({ type: SET_CURRENT_ITEM_ID, currentItemId })


type setCurrentItemType = {
    type: typeof SET_CURRENT_ITEM,
    currentItem: productsObject
}
export const setCurrentItem = (currentItem: productsObject): setCurrentItemType => ({ type: SET_CURRENT_ITEM, currentItem })


type setIsFetchingType = {
    type: typeof SET_IS_FETCHING,
    isFetching: boolean
}
export const setIsFetching = (isFetching: boolean): setIsFetchingType => ({ type: SET_IS_FETCHING, isFetching })








export const getProductsAC = () => async (dispatch: Dispatch<productsType | findMinPriceType | findMaxPriceType | priceType | setIsFetchingType>) => {
    dispatch(setIsFetching(true))
    let response = await productsAPI.getProducts();
    dispatch(setProducts(response.data));
    dispatch(setIsFetching(false))
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


export const getProductById = (currentItemId: number) => async (dispatch: Dispatch<setCurrentItemType>) => {
    let response = await productsAPI.getProductById(currentItemId);
    dispatch(setCurrentItem(response.data));
}


export default productsReducer;