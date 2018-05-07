import React from 'react';
import { BounceLoader } from 'react-spinners';

class Spinner extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="sweet-loading">
				<BounceLoader color={'#36D7B7'} loading={true} size="70" />
				<div className="load-msg">Please wait for the movie to load...</div>
			</div>
		);
	}
}

export default Spinner;
