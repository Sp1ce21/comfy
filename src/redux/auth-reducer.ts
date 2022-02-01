import { Dispatch } from 'redux';

// const GET_PRODUCTS = 'GET_PRODUCTS'


let initialState = {
    // products: [] as Array<productsObject>,
};

export type initialStateType = typeof initialState;



type actionsTypes = {
    type: string

}

const authReducer = (state = initialState, action: actionsTypes): initialStateType => {
    switch (action.type) {
        // case SET_IS_FETCHING:
        //     return {
        //         ...state,
        //         isFetching: action.isFetching
        //     }
        default: return state;
    }
}


// type setIsFetchingType = {
//     type: typeof SET_IS_FETCHING,
//     isFetching: boolean
// }
// export const setIsFetching = (isFetching: boolean): setIsFetchingType => ({ type: SET_IS_FETCHING, isFetching })




export default authReducer;