export interface ReposState {
  repos: GitRepo[];
  loading: boolean;
  error: string | null;
  searchQuery: string;
  sortBy: string;
  favoritesIds: number[];
  currentPage:number;
  perPage: number;
  reposCount: number;
}

// eslint-disable-next-line no-shadow
export enum ReposActionTypes {
  FETCH_REPOS = 'FETCH_REPOS',
  FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS',
  FETCH_REPOS_ERROR = 'FETCH_REPOS_ERROR',
  SET_SEARCH_QUERY = 'SET_SEARCH_QUERY',
  SET_SORTBY = 'SET_SORTBY',
  ADD_TO_FAVORITES = 'ADD_TO_FAVORITES',
  REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES',
  SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
  SET_PER_PAGE = 'SET_PER_PAGE',
  SET_PAGES_COUNT = 'SET_PAGES_COUNT',
}

export interface FetchReposAction {
  type: ReposActionTypes.FETCH_REPOS,
}

export interface FetchReposSuccessAction {
  type: ReposActionTypes.FETCH_REPOS_SUCCESS,
  payload: Response,
}

export interface FetchReposErrorAction {
  type: ReposActionTypes.FETCH_REPOS_ERROR,
  payload: string,
}

export interface SetSearchQueryAction {
  type: ReposActionTypes.SET_SEARCH_QUERY
  payload: string,
}

export interface SetSortByAction {
  type: ReposActionTypes.SET_SORTBY,
  payload: string,
}

export interface AddToFavoritesAction {
  type: ReposActionTypes.ADD_TO_FAVORITES,
  payload: number,
}

export interface RemoveFromFavoritesAction {
  type: ReposActionTypes.REMOVE_FROM_FAVORITES,
  payload: number,
}

export interface SetCurrentPageAction {
  type: ReposActionTypes.SET_CURRENT_PAGE,
  payload: number,
}

export interface SetPerPageAction {
  type: ReposActionTypes.SET_PER_PAGE,
  payload: number,
}

export interface SetPagesCountAction {
  type: ReposActionTypes.SET_PAGES_COUNT,
  payload: Response,
}

export type ReposAction =
  FetchReposAction
  | FetchReposSuccessAction
  | FetchReposErrorAction
  | SetSearchQueryAction
  | SetSortByAction
  | AddToFavoritesAction
  | RemoveFromFavoritesAction
  | SetCurrentPageAction
  | SetPerPageAction
  | SetPagesCountAction;
