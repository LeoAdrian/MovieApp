import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
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
			{/* <MovieListItem setMovie={props.setMovie} movie={movie} /> */}
			<Link to={`${props.match.url}/${movie.title}`}>
				<MovieListItem setMovie={props.setMovie} movie={movie} />
			</Link>
		</div>
	));

	return (
		<div className="list-component">
			<button onClick={() => console.log(props)}>Test path</button>
			<div className="list-of-movies">{listMovies}</div>
			<Route
				{...props}
				path={`${props.match.path}/:title`}
				render={props => <div>{props.match.params.title}</div>}
			/>
		</div>
	);
};

export default RenderList;
