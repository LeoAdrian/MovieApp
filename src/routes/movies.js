import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Movies = props => {
	if (props.listOfMovies === null) {
		return <Redirect to="/" />;
	}
	const posterURL = imgURL => {
		return `https://image.tmdb.org/t/p/w185${imgURL}`;
	};

	console.log('Movies component');
	const listMovies = props.listOfMovies.map(movie => (
		<div className="movie-comp" key={movie.id}>
			<img
				className="movie-poster"
				src={posterURL(movie.poster_path)}
				width="185"
				height="278"
			/>
			<div className="movie-info">
				<h3>{movie.title}</h3>
			</div>
		</div>
	));

	return (
		<div className="list-component">
			<Link to="/">
				<button>Go to homepage</button>
			</Link>
			<div className="list-of-movies">{listMovies}</div>
			<div />
		</div>
	);
};

export default Movies;
