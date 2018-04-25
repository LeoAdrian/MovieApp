import React from 'react';

// Url used to build the images
const POSTER_URL = `https://image.tmdb.org/t/p/`;
const width = `original`;

// src = {`${POSTER_URL}${width}/${movie.backdrop_path}`}

const MovieItem = ({ movie }) => {
	let divStyles = {
		backgroundImage: `linear-gradient(to right,rgba(0,0,0,0.9), rgba(0,0,0,0.1)),url(${POSTER_URL}${width}/${
			movie.backdrop_path
		})`,
		color: 'white'
	};

	return (
		<section style={divStyles}>
			<div className="text_carousel float-left col-md-6">
				<h1>{movie.title}</h1>
				{/* <div>{movie.overview}</div> */}
			</div>
		</section>
	);
};

export default MovieItem;
