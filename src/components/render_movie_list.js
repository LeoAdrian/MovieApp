import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import MovieListItem from '../components/movie_list_item';

const RenderList = props => {
	console.log('Movies component');
	const listMovies = props.listOfMovies.map(movie => (
		<div className="movie-comp" key={movie.id}>
			{/* <img
				className="movie-poster"
				src={posterURL(movie.poster_path)}
				width="185"
				height="278"
			/>
			<div className="movie-info">
				<h3>{movie.title}</h3>
			</div> */}
			<MovieListItem setMovie={props.setMovie} movie={movie} />
		</div>
	));

	return (
		<div className="list-component">
			<div className="list-of-movies">{listMovies}</div>
			<div />
		</div>
	);
};

export default RenderList;
