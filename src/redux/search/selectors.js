export const selectRecipes = state => state.search.recipes;
export const selectSearchStatus = state => state.search.isLoading;
export const selectSearchError = state => state.search.error;