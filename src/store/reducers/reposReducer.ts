import { ReposAction, ReposActionTypes, ReposState } from '../types/repos';

const initialState: ReposState = {
  repos: [],
  loading: false,
  error: null,
  searchQuery: '%3E1',
  sortBy: 'stars',
  favoritesIds: [],
  currentPage: 1,
  perPage: 40,
  reposCount: 0,
};

export const reposReducer = (state = initialState, action: ReposAction) => {
  switch (action.type) {
    case ReposActionTypes.FETCH_REPOS:
      return {
        ...state,
        loading: true,
      };

    case ReposActionTypes.FETCH_REPOS_SUCCESS:
      return {
        ...state,
        repos: [...action.payload.items],
        loading: false,
      };

    case ReposActionTypes.FETCH_REPOS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case ReposActionTypes.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };

    case ReposActionTypes.SET_SORTBY:
      return {
        ...state,
        sortBy: action.payload,
      };

    case ReposActionTypes.ADD_TO_FAVORITES:
      return {
        ...state,
        favoritesIds: [...state.favoritesIds, action.payload],
      };

    case ReposActionTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favoritesIds: state.favoritesIds.filter(id => id !== action.payload),
      };

    case ReposActionTypes.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case ReposActionTypes.SET_PER_PAGE:
      return {
        ...state,
        perPage: action.payload,
      };

    case ReposActionTypes.SET_PAGES_COUNT:
      return {
        ...state,
        reposCount: action.payload.total_count,
      };

    default:
      return state;
  }
};
