import React from 'react';
import WatchMovieBt from '../components/watch-movie-button';
import sendTorrent from '../utils/send_torrent_name';
import { Link, Redirect } from 'react-router-dom';

const Movie = props => {
	if (props.singleMovie === null) {
		return <Redirect to="/" />;
	}

	let backgroundUrl = `https://image.tmdb.org/t/p/original${
		props.singleMovie.backdrop_path
	}`;
	let resolution = '720p';
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

					{/* Toggle button for resolution */}
					<label className="switch">
						<input type="checkbox" id="togBtn" />
						<div className="sliderBt round">
							<span
								onClick={() => {
									resolution = '720p';
									console.log(resolution);
								}}
								className="on"
							>
								1080p
							</span>
							<span
								onClick={() => {
									resolution = '1080p';
									console.log(resolution);
								}}
								className="off"
							>
								720p
							</span>
						</div>
					</label>
					<WatchMovieBt
						toggleSpinner={props.toggleSpinner}
						resolution={resolution}
						sendTorrent={sendTorrent}
						singleMovie={props.singleMovie}
					/>
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
