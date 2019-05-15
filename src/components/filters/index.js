import React, { Component } from 'react';
import SearchBar from '../search_bar';
import SelectFilters from '../select_filters'
import './filters.css'

const Filters = (props) =>{
    return (
      <div>
        <SearchBar />
        <div className="discover">
          Discover new movies and tv shows
        </div>
        <SelectFilters handleSubmit = {props.handleSubmit} />
      </div>
    )
  }


export default Filters