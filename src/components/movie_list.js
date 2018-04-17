import React, { Component } from 'react';
import MovieListItem from './movie_list_item';
import Slider from 'react-slick';
import MovieDetail from './movie_list_detail';
import YTSearch from 'youtube-api-search';


// Url used to build the images
const POSTER_URL = `https://image.tmdb.org/t/p/`;
const  width = `w500`;
// YT search API_KEY
const API_KEY = `AIzaSyBnLX3IAsZJWK2SigM9fTWnh9IXBMQ1t0Y`;

// MovieList should be a class component in order to keep track of the selectedMovie
// const MovieList = ({movieList, selectedMovie}) => {
class MovieList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Carousel settings
        settings: {
            dots:false,
            infinite: false,
            dragable:false,
            autoplay:false,
            speed: 950,
            slidesToShow:7,
            slidesToScroll:6,
            focusOnSelect:false
          },
          selectedMovie: this.props.movieList[0],
          trailerInfo:null,
          trailer:null,
          active:false
    }
  }

  // Getting YT trailer
//   getYTVideo = () =>{
//     return YTSearch({key:API_KEY, term: `${this.state.selectedMovie.title} trailer`}, videos => this.setState({trailer: videos[0]}))
//     // console.log(this.state.trailerInfo.adult);
// }

  getPromise = () => {
    return fetch(`https://api.themoviedb.org/3/movie/${this.state.selectedMovie.id}?api_key=795746de6623bafccfaa61bf42e3adb8&append_to_response=videos`).then(response => response.json()).then((data) => this.setState({trailerInfo: data}))
  }

  // Setting the on click movie when it comes from movie_list_item
  setSelected(selectedMovie){
    // Setting the selected movie coming from movie_list_item
    this.setState({selectedMovie});

    // Getting the selected movie and passing the title to obtain the YT trailer
    setTimeout(() => this.getPromise(), 0); //- 10
    // setTimeout(() => this.getYTVideo(),0);  //- 100 Initially

  }

   toggleComponent = (bool) => {
     this.setState({active:bool});
   }

  // Mapping movieList arr in order to pass a movie at a time to the MovieListItem
    band = ()  => this.props.movieList.map(movie => {
        return (
            <div className = 'list_images' key = {movie.id}>
              <MovieListItem
                showComponent = {() => this.toggleComponent(true)}
                onMovieSelect = {this.setSelected.bind(this)}
                movie = {movie} />
            </div>

        )
    })

    render(){
      return (
        <div>
          <div className = 'slider-label'><h2>{this.props.title}</h2></div>
          {/* Slider module that creates the carousel */}
          <Slider className = 'slider' {...this.state.settings}>
            {this.band()}
          </Slider>
          <div className = 'show-detail'>
            {this.state.active  && <MovieDetail toggleSpinner = {this.props.toggleSpinner} hideComponent = {() => this.toggleComponent(false)} selectedMovie = {this.state.selectedMovie}/>}
          </div>
        </div>
      )
    }
}

export default MovieList;
