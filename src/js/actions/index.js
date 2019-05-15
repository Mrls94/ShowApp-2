import { ADD_ARTICLE, ADD_MOVIES, SEARCH, CHANGE_MEDIA_TYPE, SET_SELECTED_YEAR, ADD_MOVIE_CATEGORIES, ADD_TV_CATEGORIES } from "../constants/action-types"

export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload }
};

export function addMovies(payload){
  return { type: ADD_MOVIES, payload }
}

export function search(payload){
  return { type: SEARCH, payload }
}

export function changeMediaType(payload){
  return { type: CHANGE_MEDIA_TYPE, payload }
}

export function setSelectedYear(payload){
  return { type: SET_SELECTED_YEAR, payload }
}

export function addMovieCategories(payload){
  return { type: ADD_MOVIE_CATEGORIES, payload }
}

export function addTvCategories(payload){
  return { type: ADD_TV_CATEGORIES, payload }
}