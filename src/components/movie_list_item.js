import React from 'react';
import { Link } from 'react-router-dom';

const MovieListItem = props => {
	const posterUrl = () => {
		// Url used to build the images
		const POSTER_URL = `https://image.tmdb.org/t/p/`;
		const width = `w185`;
		return `${POSTER_URL}${width}`;
	};
	// const movie = props.movie;
	const b = true;
	// props.showComponent
	return (
		<div
			className="movie-as-poster"
			onClick={() => props.setMovie(props.movie)}
		>
			<img
				// onClick={() => props.onMovieSelect(props.movie)}
				src={`${posterUrl()}/${props.movie.poster_path}`}
			/>
		</div>
	);
};

export default MovieListItem;
