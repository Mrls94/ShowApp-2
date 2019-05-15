import React, { Component } from 'react';
import { connect } from "react-redux";
import "./card.css"
import "./card.scss"
import { IMG_BASE_URL } from "../../js/constants/api-requests"
import ModalVideo from 'react-modal-video'
import { API_BASE_URL, API_KEY } from "../../js/constants/api-requests"
import axios from "axios"

const mapStateToProps = state => {
  return { 
    movies: state.movies,
    media_type: state.media_type,
    tvCategories: state.tvCategories,
    movieCategories: state.movieCategories
  };
};

class Card extends Component{
  constructor(props){
    super(props)

    this.state = {
      isOpen: false,
      videoId: "L61p2uyiMSo"
    }
  }

  openModal () {
    var url = API_BASE_URL + "movie/" + this.props.movie.id + "/videos" + "?api_key=" + API_KEY
    axios.get(url).then( response => {
      if(typeof response.data.results[0] !== 'undefined'){
        console.log(response.data.results[0])
        var key = response.data.results[0].key
        this.setState({videoId: key})
        this.setState({isOpen: true})
      } else {
        alert('Comin sun')
      }
    })
  }

  getGenreList(mediaType, genreIds){
    var genreList;

    if(mediaType === "tv"){
      genreList = this.props.tvCategories
    } else {
      genreList = this.props.movieCategories
    }

    var genres = genreList.filter(genre => {
      return genreIds.includes(genre.id)
    }) 

    return genres.map(el => {
      return el.name
    }).join(", ")
  }

  getMediaType(movie){
    if(this.props.media_type === "multi"){
      return movie.media_type
    } else {
      return this.props.media_type
    }
  }

  getDateParsed(dateString){
    return new Date(dateString).toLocaleDateString("en-US", {year: "numeric", month: "long", day: "numeric"})
  }

  seeTrailer(event){
    alert("Comin sun");
  }
  
  render() { 
    return (
      <div>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.videoId} onClose={() => this.setState({isOpen: false})} />
        <div className="card">
          { this.props.movie.poster_path !== null ? <img src = { IMG_BASE_URL + this.props.movie.poster_path} /> : "NO image" }
          <div className="card-info">
            <div className="card-header">
              <div className="title">
                { this.props.movie.name ? this.props.movie.name : this.props.movie.title }
              </div>
              <div className="popularity">
                { this.props.movie.popularity }
              </div>
            </div>
            <div className="date-genre">
              <div className="date-card">
                { this.getDateParsed(this.props.movie.release_date ? this.props.movie.release_date : this.props.movie.first_air_date) }
              </div>
              <div className="genre-card">
                { this.getGenreList(this.getMediaType(this.props.movie), this.props.movie.genre_ids) }
              </div>
            </div>
            <div className="overview">
              { this.props.movie.overview } 
            </div>
            <div className="card-footer">
              <div className="trailer-btn" onClick={(event) => this.openModal()}>
                Ver Trailer
              </div>
              <div className="add-favorites">
                {"Agregar a favoritos <3"}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Card);