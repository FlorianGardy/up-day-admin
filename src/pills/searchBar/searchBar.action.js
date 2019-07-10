export const UPDATE_SEARCH_VALUE = "@searchBar/UPDATE_SEARCH_VALUE";
export const RESET_SEARCH_VALUE = "@searchBar/RESET_SEARCH_VALUE";

export const updateSearchValue = searchValue => {
  return { type: UPDATE_SEARCH_VALUE, searchValue };
};

export const resetSearchValue = () => {
  return { type: RESET_SEARCH_VALUE };
};
