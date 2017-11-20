import {initialState} from "../initialState";

export const CategoryReducer = (state = initialState.categories, action) => {
    switch (action.type) {
        case 'CATEGORIES_FETCHED':
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
};