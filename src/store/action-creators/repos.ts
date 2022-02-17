import { Dispatch } from 'react';
import { BASE_URL } from '../../api';
import { ReposAction, ReposActionTypes } from '../types/repos';

export const fetchRepos = (
  searchQuery: string,
  sortBy: string,
  currentPage: number,
  perPage: number,
) => {
  return async (dispatch: Dispatch<ReposAction>) => {
    try {
      dispatch({ type: ReposActionTypes.FETCH_REPOS });
      const response = await fetch(
        `${BASE_URL}search/repositories?q=${searchQuery}&sort=${sortBy}&page=${currentPage}&per_page=${perPage}`,
      );

      const reposFromServer = response.json();

      dispatch({
        type: ReposActionTypes.SET_PAGES_COUNT,
        payload: await reposFromServer,
      });

      dispatch({
        type: ReposActionTypes.FETCH_REPOS_SUCCESS,
        payload: await reposFromServer,
      });
    } catch (error) {
      dispatch({
        type: ReposActionTypes.FETCH_REPOS_ERROR,
        payload: 'An error occurred while loading repositories. Please try again later or contact us',
      });
    }
  };
};

export const setCurrentPage = (currPage: number): ReposAction => {
  return { type: ReposActionTypes.SET_CURRENT_PAGE, payload: currPage };
};

export const setSortParam = (sortBy: string): ReposAction => {
  return { type: ReposActionTypes.SET_SORTBY, payload: sortBy };
};

export const setSearchQuery = (searchQuery: string): ReposAction => {
  return { type: ReposActionTypes.SET_SEARCH_QUERY, payload: searchQuery };
};

export const addToFavorites = (repoId: number): ReposAction => {
  return { type: ReposActionTypes.ADD_TO_FAVORITES, payload: repoId };
};

export const removeFromFavorites = (repoId: number): ReposAction => {
  return { type: ReposActionTypes.REMOVE_FROM_FAVORITES, payload: repoId };
};

export const changeStateRepos = (sortedRepos: GitRepo[]) => {
  return {
    type: ReposActionTypes.CHANGE_STATE_REPOS,
    payload: sortedRepos,
  };
};
