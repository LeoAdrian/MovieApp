import React, { Component } from 'react';
import './App.css';
import Main from './Main.js';
import Spinner from './components/spinner';
import Movie from './routes/movie';
import Movies from './routes/movies';
import MovieList from './components/movie_list';
import MovieCarousel from './components/movie_carousel';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	Switch
} from 'react-router-dom';

// Url used to build the images
const POSTER_URL = `https://image.tmdb.org/t/p/`;
const width = `w500`;

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			movieTitle: null,
			foundMovie: false,
			foundMovies: false,
			singleMovie: null,
			listOfMovies: null,
			loaded: false,
			resolution: '720p'
		};
	}

	// Pass params to route
	passName = name => {
		this.setState({ singleMovie: name });
	};

	// // Function that displays a loading animation
	toggleSpinner = () => {
		this.state.loaded
			? this.setState({ loaded: false })
			: this.setState({ loaded: true });
		document.querySelector('.hide-load').classList.toggle('show-load');
		document.querySelector('body').classList.toggle('body-load');
		console.log(this.state.loaded);
		console.log('You clicked the button');
	};

	componentDidMount() {
		this.toggleSpinner();
		// Toggle loading spinner before page loads
		setTimeout(
			function() {
				this.toggleSpinner();
			}.bind(this),
			5000
		);
	}

	// Function that sets found movies/movie from search component
	handleSearchInput = (event, fetchFunc) => {
		// When Enter key is pressed fetch the input value
		var inputVal = event.target.value;
		if (event.charCode === 13) {
			fetchFunc('', 1, 'search/', `&query=${inputVal}`)
				.then(data => {
					let dateObj = new Date();
					let actualDate = `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDay()}`;
					console.log(data);
					// Only get movies that released already
					// that have genres, posters/images and
					// if the movie has video prop false
					let filteredData = data.results.filter(movie => {
						return (
							// movie.backdrop_path !== null &&
							// movie.genre_ids.length > 0 &&
							actualDate > movie.release_date &&
							movie.video !== true &&
							movie.vote_count > 500
						);
					});
					return [filteredData, data];
				})
				.then(dataArr => {
					// If more than one movie is found go to a route that renders a list of movies
					// Else go to movie page
					if (dataArr[0].length >= 1) {
						this.setState({ foundMovies: true, listOfMovies: dataArr[0] });
					}
					//  else {
					// 	fetchFunc('', 1, '', ``, `/${dataArr[1].results[0].id}`).then(
					// 		movieObj => {
					// 			console.log(movieObj);
					// 			this.setState({ foundMovie: true, singleMovie: movieObj });
					// 		}
					// 	);
					// }
				});
		}
	};

	changeFoundMoviesFalse = () => {
		this.setState({ foundMovies: false });
	};

	changeSingleMovieFalse = () => {
		this.setState({ foundMovie: false });
	};

	shouldComponentUpdate(prevProps, prevState, nextProps, nextState) {
		if (
			prevState.foundMovies ||
			prevState.foundMovie ||
			prevState.loaded ||
			!prevState.loaded
		) {
			return true;
		} else {
			return false;
		}
	}

	// setSinglePromise = m => {
	// 	return new Promise((reject, resolve) => {
	// 		resolve(this.setState({ singleMovie: m }));
	// 	});
	// };

	setMovie = mov => {
		// this.setSinglePromise(mo).then(() => console.log('sdsd'));
		// 	.then(() => this.setState({ foundMovie: true }))
		// 	.then(() => console.log(this.state.singleMovie));
		this.setState({ singleMovie: mov }, _ =>
			this.setState({ foundMovie: true })
		);
	};

	changeResolution = res => {
		this.setState({ resolution: res });
		setTimeout(_ => {
			console.log(`Resolution in state is: ${this.state.resolution}`);
		}, 0);
	};

	render() {
		return (
			<div>
				<Router>
					<div className="App">
						<Switch>
							<Route
								exact
								path="/"
								render={() => (
									<Main
										changeSingleMovieFalse={this.changeSingleMovieFalse}
										changeFoundMoviesFalse={this.changeFoundMoviesFalse}
										foundMovie={this.state.foundMovie}
										foundMovies={this.state.foundMovies}
										passName={this.passName}
										handleSearchInput={this.handleSearchInput}
										setMovie={this.setMovie}
									/>
								)}
							/>
							<Route
								{...this.state}
								path="/movies/:title"
								// render={_ => <div>Dsdsdsd</div>}
								render={props => (
									<Movie
										changeResolution={this.changeResolution}
										toggleSpinner={this.toggleSpinner}
										{...props}
										{...this.state}
									/>
								)}
							/>
							<Route
								path="/movies"
								{...this.state}
								render={props => (
									<Movies
										{...this.state}
										{...props}
										changeFoundMovies={this.changeFoundMovies}
										setMovie={this.setMovie}
										changeFoundMoviesFalse={this.changeFoundMoviesFalse}
										changeSingleMovieFalse={this.changeSingleMovieFalse}
									/>
								)}
							/>
						</Switch>
					</div>
				</Router>

				{this.state.loaded && <Spinner loaded={this.state.loaded} />}
				{/* Div that handles the display of the spinner */}
				<div className="hide-load" />
			</div>
		);
	}
}

export default App;
