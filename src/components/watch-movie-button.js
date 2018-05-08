import React, { Component } from 'react';

const WatchMovieBt = props => {
	const data = {
		torrent: `${props.singleMovie.title} ${props.singleMovie.release_date.slice(
			0,
			4
		)} ${props.resolution}`
	};

	const loadTorrent = event => {
		props.sendTorrent(event, data, props.toggleSpinner);
		props.toggleSpinner();
	};

	return (
		<button
			onClick={ev => {
				loadTorrent(ev);
				console.log(data);
			}}
		>
			Watch movie
		</button>
	);
};

export default WatchMovieBt;
