import React, { Component } from 'react';
import SearchList from './search_list';
import { Redirect } from 'react-router-dom';

const getElement = ({ capitalized, text }) => (
	<li key={capitalized + text}>
		<b>{capitalized}</b>
		{text}
	</li>
);

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			query: '',
			testArr: [
				'Geralt of Rivia',
				'Geralt',
				'Yennefer',
				'Dendelion',
				'Triss',
				'Ciri',
				'Emhyr',
				'Vesemir',
				'Crach',
				'Grenver'
			],
			results: []
		};
	}

	searchProm = t => {
		return new Promise((reject, resolve) => {
			console.log('Promise');
		});
	};

	handleInputChange = ev => {
		return new Promise((resolve, reject) => {
			resolve(this.setState({ query: ev.target.value }));
		});
	};

	// displayQuery = ev => {
	// 	// Change the state whenever the user inputs something
	// 	// after that start finding the match
	// 	this.handleInputChange(ev).then(() => {
	// 		let test = this.state.testArr;
	// 		let query = this.state.query;
	//
	// 		// Matches are pushed to this array
	// 		let filteredArr = [];
	// 		// Create a reg-expression that takes the input for comparison
	// 		let regex = new RegExp(query, 'i');
	//
	// 		test.filter(name => {
	// 			if (name.search(regex) === 0 && query.length !== 0) {
	// 				let capitalizeQuery = query.replace(/\b\w/g, l => l.toUpperCase());
	// 				let remainingWord = name.slice(capitalizeQuery.length);
	// 				console.log('Capitalized word: ' + capitalizeQuery);
	// 				console.log('Remaining word: ' + remainingWord);
	//
	// 				filteredArr.push(
	// 					getElement({ capitalized: capitalizeQuery, text: remainingWord })
	// 				);
	// 			}
	// 		});
	// 		// Push message if no result was found
	// 		if (filteredArr.length === 0 && this.state.query !== '') {
	// 			filteredArr.push(
	// 				<li key="Cpsxow1ODSDÜ¿╞">Nothing matches your search</li>
	// 			);
	// 		}
	// 		this.setState({ results: filteredArr });
	// 	});
	// 	// .then((filteredArr) => this.setState({results:filteredArr}));
	// };

	// handleSearchInput = (event) => {
	// 	if(event.charCode === 13){
	// 		this.props.getMoviesURL('', 1, 'search/', `&query=${event.target.value}`)
	// 		.then(data => {
	// 			console.log(data);
	// 			if(data.total_results > 1){
	// 					this.setState({foundMovies:true});
	// 			} else {
	// 					this.setState({foundMovie:true});
	// 			}
	// 		})
	// 	}
	// }

	componentWillUnmount() {
		this.props.changeFoundMoviesFalse();
	}

	render() {
		if (this.props.foundMovies) {
			return <Redirect to="/movies" />;
		} else if (this.props.foundMovie) {
			return <Redirect to="/movie" />;
		}
		return (
			<div className="search-movie">
				<input
					ref={el => (this.inputTitle = el)}
					type="text"
					placeholder="Search movie..."
					onChange={this.displayQuery}
					onKeyPress={ev =>
						this.props.handleSearchInput(ev, this.props.getMoviesURL)
					}
					// onKeyPress = {this.handleSearchInput}
				/>
				<SearchList className="searchList" results={this.state.results} />
			</div>
		);
	}
}

export default Search;
