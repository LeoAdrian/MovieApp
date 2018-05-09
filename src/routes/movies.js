import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import MovieListItem from '../components/movie_list_item';
import RenderList from '../components/render_movie_list';

class Movies extends Component {
	constructor(props) {
		super();
	}

	posterURL = imgURL => {
		return `https://image.tmdb.org/t/p/w185${imgURL}`;
	};

	componentWillUnmount() {
		// this.props.changeFoundMoviesFalse();
	}

	render() {
		if (this.props.listOfMovies === null) {
			return <Redirect to="/" />;
		}
		if (this.props.foundMovie) {
			return <Redirect to="/movie" />;
		}
		return (
			<div>
				<Link to="/">Go back</Link>

				<RenderList
					setMovie={this.props.setMovie}
					listOfMovies={this.props.listOfMovies}
				/>
			</div>
		);
	}
}

export default Movies;
