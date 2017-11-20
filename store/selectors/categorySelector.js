export const getCategoriesList = (state) => {
    return state.categories.list;
};

export const findCategoryByName = (state, categoryName) => {
    return state.categories.list.find((category) => {
        return category.name === categoryName;
    })
};