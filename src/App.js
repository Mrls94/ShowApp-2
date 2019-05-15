import React, { Component } from 'react';
import LandingPage from './scenes/landing_page';
import { connect } from "react-redux";
import { addMovieCategories } from "./js/actions/index"
import { addTvCategories } from "./js/actions/index"
import { API_BASE_URL, API_KEY } from "./js/constants/api-requests"
import './App.css';
import axios from "axios";

const mapDispatchToProps = dispatch => {
  return {
    addMovieCategories: categories => dispatch(addMovieCategories(categories)),
    addTvCategories: categories => dispatch(addTvCategories(categories))
  };
}

class App extends Component {
  constructor(props){
    super(props)

    let tvGenreUrl = API_BASE_URL + "genre/tv/list?api_key=" + API_KEY
    let movieGenreUrl = API_BASE_URL + "genre/movie/list?api_key=" + API_KEY

    axios.get(movieGenreUrl).then( response => {
      this.props.addMovieCategories(response.data.genres)
    });

    axios.get(tvGenreUrl).then( response => {
      this.props.addTvCategories(response.data.genres)
    });
  }
  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
