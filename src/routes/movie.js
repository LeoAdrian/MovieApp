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
		background: `linear-gradient( rgba(0, 0, 0, 0.75),rgba(0, 0, 0, 0.75) ), url(${backgroundUrl}) no-repeat center center fixed`,
		backgroundSize: 'cover',
		width: '100%',
		height: '100%',
		overflow: 'hidden',
		filter: 'blur(2px)',
		position: 'absolute'
	};
	return (
		// <ul>
		<div className="movie-page">
			<div style={divStyle} />
			<div className="movie-container">
				<div className="poster-container">
					<img src={posterUrl} />
				</div>
				<div className="description-container">
					<h1>{props.singleMovie.title}</h1>
					<div className="movie-page-text">{props.singleMovie.overview}</div>
					<div>
						<Link to="/">Go to homepage</Link>
					</div>
				</div>
			</div>
		</div>

		// </ul>
	);
};
// }

export default Movie;
