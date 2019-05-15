import React, { Component } from 'react';
import './header.css'
import { connect } from "react-redux";
import { changeMediaType } from "../../js/actions/index";

const mapDispatchToProps = dispatch =>{
  return{
    changeMediaType: media_type => dispatch(changeMediaType(media_type))
  };
};

const mapStateToProps = state => {
  return { currentMediaType: state.mediaType };
}

class Header extends Component{
  handleClick(event, media){
    this.props.changeMediaType(media);
  };

  render() {
    return (
      <div className="header">
        <div className="logo">
          <div className="img-logo"></div>
          <span>Showapp</span>
        </div>
        <ul>
          <li className={ this.props.currentMediaType === "movie" ? "active" : "disabled" } onClick={(event)=>this.handleClick(event, "movie")}>Movies</li>
          <li className={ this.props.currentMediaType === "tv" ? "active" : "disabed" } onClick={(event)=>this.handleClick(event, "tv")}>Series</li>
          <li className={ this.props.currentMediaType === "multi" ? "active" : "disabed" } onClick={(event)=>this.handleClick(event, "multi")}>Favorites</li>
        </ul>
      </div>
    );
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(Header)