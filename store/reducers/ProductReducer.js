import {initialState} from "../initialState";

export const ProductReducer = (state = initialState.products, action) => {
    switch (action.type) {
        case 'PRODUCTS_FETCHED':
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
};