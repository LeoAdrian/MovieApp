import React, { Component } from 'react';
import MovieCarousel from './components/movie_carousel';
import MovieList from './components/movie_list';
import Spinner from './components/spinner';
import Search from './components/search';
import { Redirect } from 'react-router-dom';

// Url used to build the images
const POSTER_URL = `https://image.tmdb.org/t/p/`;
const width = `w500`;

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			popular: [],
			carousel: [],
			topRated: [],
			upcoming: [],
			loading: false
		};
	}
	getMoviesURL(type = '', page = 1, method = '', query = '', id = '') {
		// The Movie Database API
		const API_KEY = `795746de6623bafccfaa61bf42e3adb8`;
		const URL = `https://api.themoviedb.org/3/${method}movie${type}${id}?api_key=${API_KEY}&language=en-US${query}&page=${page}`;
		return fetch(URL).then(response => response.json());
	}

	// Creating a filtered array of elements to pass to the carousel
	filterArr(arr) {
		let newArr = [];
		// arr.map(item => {
		//   if(item.vote_average > 7.1 && item.title !== 'The Shape of Water'){
		//     newArr.push(item)
		//   }
		arr.filter(movie => {
			if (newArr.length <= 4) {
				newArr.push(movie);
			} else {
				return;
			}
		});
		return newArr;
	}

	componentDidMount() {
		// Toggle loading spinner before page loads
		// this.toggleSpinner();
		// setTimeout(
		// 	function() {
		// 		this.toggleSpinner();
		// 	}.bind(this),
		// 	5000
		// );
		// Get promises for some categories
		const promises = [
			this.getMoviesURL('/popular'),
			this.getMoviesURL('/top_rated'),
			this.getMoviesURL('/upcoming')
		];
		// Resolve said promises
		Promise.all(promises).then(values =>
			this.setState({
				popular: values[0].results,
				carousel: this.filterArr(values[0].results),
				topRated: values[1].results.filter(
					movie => movie.original_title !== 'Twin Peaks'
				),
				upcoming: values[2].results.filter(
					movie => movie.original_title !== 'Extinction'
				)
			})
		);
	}

	// Function that displays a loading animation
	toggleSpinner = () => {
		this.state.loading === true
			? this.setState({ loading: false })
			: this.setState({ loading: true });
		document.querySelector('.hide-load').classList.toggle('show-load');
		document.querySelector('body').classList.toggle('body-load');
		console.log(this.state.loading);
		console.log('You clicked the button');
	};

	// passName = (name) => {
	//   // this.setState({movieTitle:name});
	//   console.log()
	// }

	// Render all the components in '/' route
	render() {
		return (
			<div className="Main">
				<Search
					changeFoundMoviesFalse={this.props.changeFoundMoviesFalse}
					foundMovie={this.props.foundMovie}
					foundMovies={this.props.foundMovies}
					handleSearchInput={this.props.handleSearchInput}
					getMoviesURL={this.getMoviesURL}
				/>
				<MovieCarousel movies={this.state.carousel} />
				<MovieList
					passName={this.props.passName}
					toggleSpinner={this.toggleSpinner}
					title="Popular"
					movieList={this.state.popular}
					setMovie={this.props.setMovie}
				/>
				<MovieList
					toggleSpinner={this.toggleSpinner}
					title="Top Rated"
					movieList={this.state.topRated}
				/>
				{/* <MovieList toggleSpinner = {this.toggleSpinner} title = 'Upcoming' movieList = {this.state.upcoming}/> */}
				{this.state.loading && <Spinner load={this.state.loading} />}
				{/* Div that handles the display of the spinner */}
				<div className="hide-load" />
			</div>
		);
	}
}

export default Main;
