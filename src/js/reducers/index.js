import { ADD_ARTICLE, ADD_MOVIES, SEARCH, CHANGE_MEDIA_TYPE, SET_SELECTED_YEAR, ADD_MOVIE_CATEGORIES, ADD_TV_CATEGORIES } from "../constants/action-types"

const initialState = {
  movies: [],
  articles: [],
  search_query: '',
  mediaType: 'movie',
  selectedYear: "0",
  movieCategories: [],
  tvCategories: []
};

const rootReducer = (state = initialState, action) => {
  if ( action.type === ADD_ARTICLE ){
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }

  if ( action.type === SEARCH ){
    return {
      ...state, search_query: action.payload
    }
  }

  if ( action.type === ADD_MOVIES ){
    return Object.assign({}, state, {
      movies: action.payload
    });
  }

  if ( action.type === CHANGE_MEDIA_TYPE ){
    return {
      ...state, mediaType: action.payload
    }
  }

  if ( action.type === SET_SELECTED_YEAR ){
    return {
      ...state, selectedYear: action.payload
    }
  }

  if ( action.type === ADD_MOVIE_CATEGORIES ){
    return {
      ...state, movieCategories: action.payload
    }
  }

  if ( action.type === ADD_TV_CATEGORIES ){
    return {
      ...state, tvCategories: action.payload
    }
  }

  return state 
};
export default rootReducer;