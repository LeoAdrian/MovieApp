import React, { Component } from 'react';
import './App.css';
import MovieCarousel from './components/movie_carousel';
import MovieList from './components/movie_list';
// Url used to build the images
const POSTER_URL = `https://image.tmdb.org/t/p/`;
const  width = `w500`;


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      popular: [],
      carousel:[],
      topRated:[],
      upcoming:[],
      loading:true
    };
}
  getMoviesURL(type, page = 1){
    // The Movie Database API
    const API_KEY = `795746de6623bafccfaa61bf42e3adb8`;
    const URL = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`;
    return fetch(URL).then(response => response.json())
  }

// Creating a filtered array of elements to pass to the carousel
  filterArr(arr){
    let newArr = [];
    // arr.map(item => {
    //   if(item.vote_average > 7.1 && item.title !== 'The Shape of Water'){
    //     newArr.push(item)
    //   }
    arr.filter((movie) => {
      if(movie.title === 'Thor: Ragnarok' || movie.title === 'Insidious: The Last Key' || movie.title === 'Sleight'){
        newArr.push(movie);
      }
    })
    return newArr;
}

  componentDidMount() {
   const promises = [
   this.getMoviesURL('popular'),
   this.getMoviesURL('top_rated'),
   this.getMoviesURL('upcoming'),
]

  Promise.all(promises).then((values) => this.setState({
    popular:values[0].results,
    carousel:this.filterArr(values[0].results),
    topRated:values[1].results.filter((movie) => movie.original_title !== 'Twin Peaks'),
    upcoming:values[2].results.filter((movie) => movie.original_title !== 'Extinction')
  }))
  }


  render() {
    return (
      <div className="App">
        <MovieCarousel movies = {this.state.carousel} />
        <MovieList title = 'Popular' movieList = {this.state.popular}/>
        <MovieList title = 'Top Rated' movieList = {this.state.topRated}/>
        <MovieList title = 'Upcoming' movieList = {this.state.upcoming}/>
      </div>
    );
  }
}

export default App;
