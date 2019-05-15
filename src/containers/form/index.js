import React, { Component } from 'react';
import Filters from '../../components/filters'
import CardList from '../../containers/card_list'
import { connect } from "react-redux";
import { addMovies } from "../../js/actions/index"
import { API_BASE_URL, API_KEY } from "../../js/constants/api-requests"
import axios from "axios";

const mapStateToProps = state => {
  return { 
    query: state.search_query,
    mediaType: state.mediaType,
    selectedYear: state.selectedYear
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMovies: movies => dispatch(addMovies(movies))
  };
}

class Form extends Component{
  constructor(props){
    super(props);
    this.state = { searchQuery: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    let url = API_BASE_URL + "search/" + this.props.mediaType + "?api_key=" + API_KEY + "&query=" + this.props.query
    if(this.props.selectedYear !== null || this.props.selectedYear !== "0" ){
      url = url + "&year=" + this.props.selectedYear
    } 

    axios.get(url).then( response => {
      this.props.addMovies(response.data.results.filter(movie => {
        if(movie.media_type === null){
          return true
        } else {
          return movie.media_type !== "person"
        }
      }))
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Filters handleSubmit = {this.handleSubmit} />
        </form>
        <CardList />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)