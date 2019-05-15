import React, { Component } from 'react';
import { connect } from "react-redux";
import Card from "../card/index"
import "./card_list.css"

const mapStateToProps = state => {
  return { movies: state.movies };
};

class CardList extends Component{
  render() {
    return (
      <div>
        <ul className="flex-container">
          { this.props.movies.map( el => (
            <li className="flex-item" key={el.id}> 
              <Card movie={el}/> 
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps)(CardList);