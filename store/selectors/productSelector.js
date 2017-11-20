import {findCategoryByName} from "./categorySelector";

export const getProductList = (state) => {
    return state.products.list;
};

export const findSelectedCategory = (state) => {
    return state.categories.list.find((category) => {
        return category.id === state.categories.selectedCategoryId
    })
};

export const findProductsForCategoryName = (state, categoryName) => {
    const category = findCategoryByName(state, categoryName);

    if (!category) {
        return [];
    }

    return state.products.list.filter((product) => {
        return product.category === category.id;
    })
};

export const findProductsFromSelectedCategory = (state) => {
    return state.products.list.filter((product) => {
        return product.category === state.categories.selectedCategoryId;
    })
};