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
		this.props.changeFoundMoviesFalse();
		this.props.changeSingleMovieFalse();
	}

	render() {
		if (this.props.listOfMovies === null) {
			return <Redirect to="/" push />;
		}
		// if (this.props.foundMovie) {
		// 	return <Redirect to="/movie" push />;
		// }
		return (
			<div>
				<Link to="/">Go back</Link>
				<RenderList
					{...this.props}
					setMovie={this.props.setMovie}
					listOfMovies={this.props.listOfMovies}
				/>
				{/* <Route
					path={`${props.path}`}
					render={() => (
						<Movie
							toggleSpinner={this.toggleSpinner}
							changeResolution={this.changeResolution}
						/>
				)} /> */}
			</div>
		);
	}
}

export default Movies;
