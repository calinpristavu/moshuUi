import {categoriesFetched} from "../actions/categories";

export const getCategories = () => {
    return function (dispatch) {
        return fetch('/fixtures/categories.json')
            .then(response => response.json())
            .then((categories) => {
                dispatch(categoriesFetched(categories));

                return categories;
            });
    }
};