import React, { Component } from 'react';
import { Link, Redirect, Route } from 'react-router-dom';
import MovieListItem from '../components/movie_list_item';
import Movie from '../routes/movie';

class RenderList extends Component {
	constructor(props) {
		super();

		this.state = {
			searchList: []
		};
		this.setSearchedMovies(props.listOfMovies);
	}

	setSearchedMovies = p => {
		let time = setTimeout(_ => {
			this.setState({ searchList: p });
			clearTimeout(time);
		}, 0);
	};

	listMovies = () => {
		let renderedMovies = this.props.listOfMovies.map(movie => (
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
				<Link to={`${this.props.match.url}/${movie.title}`}>
					<MovieListItem setMovie={this.props.setMovie} movie={movie} />
				</Link>
			</div>
		));
		return renderedMovies;
	};
	// console.log(list);

	componentDidMount() {
		this.props.changeResolution('720p');
		console.log('Resolution changed to default');
	}

	render() {
		return (
			<div className="list-component">
				<button onClick={() => console.log(this.state.searchList)}>
					Test path
				</button>
				<div className="list-of-movies">{this.listMovies()}</div>
			</div>
		);
	}
}

export default RenderList;

// const RenderList = props => {
// 	console.log('Movies component');
// 	const list = { ...props.listOfMovies };
//
// 	const listMovies = props.listOfMovies.map(movie => (
// 		<div className="movie-comp" key={movie.id}>
// 			{/* <img
// 				className="movie-poster"
// 				src={posterURL(movie.poster_path)}
// 				width="185"
// 				height="278"
// 			/>
// 			<div className="movie-info">
// 				<h3>{movie.title}</h3>
// 			</div> */}
// 			{/* <MovieListItem setMovie={props.setMovie} movie={movie} /> */}
// 			<Link to={`${props.match.url}/${movie.title}`}>
// 				<MovieListItem setMovie={props.setMovie} movie={movie} />
// 			</Link>
// 		</div>
// 	));
// 	// console.log(list);
// 	return (
// 		<div className="list-component">
// 			<button onClick={() => console.log(props)}>Test path</button>
// 			<div className="list-of-movies">{listMovies}</div>
// 			<Route
// 				{...props}
// 				// exact
// 				path={`${props.match.path}/:title`}
// 				render={props => <Movie {...props} />}
// 			/>
// 		</div>
// 	);
// };
//
// export default RenderList;
