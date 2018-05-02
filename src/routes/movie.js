import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Movie = props => {
	if (props.singleMovie === null) {
		return <Redirect to="/" />;
	}
	let backgroundUrl = `https://image.tmdb.org/t/p/original${
		props.singleMovie.belongs_to_collection.backdrop_path
	}`;
	let posterUrl = `https://image.tmdb.org/t/p/w500${
		props.singleMovie.poster_path
	}`;
	let divStyle = {
		backgroundImage: `linear-gradient(to right,rgba(0,0,0,0.9), rgba(0,0,0,0.1)),url(${backgroundUrl})`,
		width: '100%',
		height: '100vh',
		backgroundColor: 'black'
	};
	return (
		// <ul>
		<div className="movie-page" style={divStyle}>
			<h4>{props.singleMovie.title} Page</h4>
			<img src={posterUrl} />
			<div>
				<Link to="/">Go to homepage</Link>
			</div>
		</div>

		// </ul>
	);
};
// }

export default Movie;
