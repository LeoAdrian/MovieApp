import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Movie = props => {
	if (props.singleMovie === null) {
		return <Redirect to="/" />;
	}

	let backgroundUrl = `https://image.tmdb.org/t/p/original${
		props.singleMovie.backdrop_path
	}`;
	// props.singleMovie.belongs_to_collection === null
	// 	? (backgroundUrl =)
	// 	: (backgroundUrl = `https://image.tmdb.org/t/p/original${
	// 			props.singleMovie.belongs_to_collection.backdrop_path
	// 	  }`);

	let posterUrl = `https://image.tmdb.org/t/p/w500${
		props.singleMovie.poster_path
	}`;
	let divStyle = {
		background: `linear-gradient( rgba(0, 0, 0, 0.85),rgba(0, 0, 0, 0.85) ), url(${backgroundUrl}) no-repeat center center fixed`,
		backgroundSize: 'cover',
		height: '100%',
		overflow: 'hidden'
	};
	return (
		// <ul>
		<div className="movie-page" style={divStyle}>
			<h1>{props.singleMovie.title}</h1>
			<img className="poster-movie" src={posterUrl} />
			<div>
				<Link to="/">Go to homepage</Link>
			</div>
		</div>

		// </ul>
	);
};
// }

export default Movie;
