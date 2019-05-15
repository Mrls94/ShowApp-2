import React, { Component } from 'react';
import './search_bar.css'
import { connect } from "react-redux";
import { search } from "../../js/actions/index";

function mapDispatchToProps(dispatch){
  return{
    search: query => dispatch(search(query))
  };
}

class SearchBar extends Component{
  constructor(props){
    super(props)
    this.state = { searchQuery: '' }

    // this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({ searchQuery: event.target.value })
    this.props.search(event.target.value)
  }

  render() {
    return (
      <div className="search_bar">
        <input type="text" 
        placeholder="Search for a movie, series and videos" 
        value={this.state.searchQuery} onChange={(event)=>this.handleChange(event)} />
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(SearchBar) 