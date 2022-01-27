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

let initialState = {
    products: [] as Array<productsObject>,
    price: 500 as number,
    search: '' as string,
    minPrice: 0 as number,
    maxPrice: 500 as number,
    categories: ['All'] as Array<string>,
    currentCategory: 'All' as string,
    isBasket: false as boolean,
    addedProducts: [] as any
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
const __setAddedProducts = (addedProducts: any): addedProductsType => ({ type: SET_ADDED_PRODUCTS, addedProducts })


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
    const maxPrice = Math.ceil(array[array.length - 1]);
    dispatch(findMinPrice(Math.ceil(array[0])));
    dispatch(findMaxPrice(maxPrice));
    dispatch(setPrice(maxPrice));
}
export const getCategoriesAC = () => async (dispatch: any) => {
    let response = await productsAPI.getCategories();
    dispatch(__setCategories(response.data));
}
export const getProductByIdAC = (productId: number) => async (dispatch: any) => {
    let response = await productsAPI.getProductById(productId);
    // debugger
    dispatch(__setAddedProducts(response.data));
}




export default productsReducer;