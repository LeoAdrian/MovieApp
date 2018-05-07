import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import MovieListItem from '../components/movie_list_item';
import RenderList from '../components/render_movie_list';

class Movies extends Component {
	constructor(props) {
		super();
	}

	posterURL = imgURL => {
		return `https://image.tmdb.org/t/p/w185${imgURL}`;
	};

	componentWillUnmount() {
		this.props.changeFoundMoviesFalse();
	}

	render() {
		if (this.props.listOfMovies === null) {
			return <Redirect to="/" />;
		}
		if (this.props.foundMovie) {
			return <Redirect to="/movie" />;
		}
		return (
			<div>
				<RenderList
					toggleSpinner={this.props.toggleSpinner}
					setMovie={this.props.setMovie}
					listOfMovies={this.props.listOfMovies}
				/>
			</div>
		);
	}
}

export default Movies;

//Functional component
// const Movies = props => {
// 	if (props.listOfMovies === null) {
// 		return <Redirect to="/" />;
// 	}
// 	if (props.foundMovie) {
// 		return <Redirect to="/movie" />;
// 	}
// 	const posterURL = imgURL => {
// 		return `https://image.tmdb.org/t/p/w185${imgURL}`;
// 	};
//
// 	console.log('Movies component');
// 	const listMovies = props.listOfMovies.map(movie => (
// 		<div className="movie-comp" key={movie.id}>
// 			{/* <img
// 				className="movie-poster"
// 				src={posterURL(movie.poster_path)}
// 				width="185"
// 				height="278"
// 			/>
// 			<div className="movie-info">
// 				<h3>{movie.title}</h3>
// 			</div> */}
// 			<MovieListItem
// 				changeFoundMoviesFalse={this.changeFoundMoviesFalse}
// 				setMovie={props.setMovie}
// 				movie={movie}
// 			/>
// 		</div>
// 	));
//
// 	return (
// 		<div className="list-component">
// 			<Link to="/">
// 				<button>Go to homepage</button>
// 			</Link>
// 			<div className="list-of-movies">{listMovies}</div>
// 			<div />
// 		</div>
// 	);
// };
//
// export default Movies;
