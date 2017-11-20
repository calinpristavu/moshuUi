export const productsFetched = (products) => {
    return {
        type: 'PRODUCTS_FETCHED',
        payload: products
    }
};