import {productsFetched} from "../actions/products";

export const getProducts = () => {
    return function (dispatch) {
        return fetch('/fixtures/products.json')
            .then(response => response.json())
            .then((products) => {
                dispatch(productsFetched(products));

                return products;
            });
    }
};