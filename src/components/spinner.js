import React from 'react';
import { BounceLoader } from 'react-spinners';

class Spinner extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log('Component reached');
		return (
			<div className="sweet-loading">
				<BounceLoader color={'#36D7B7'} loading={this.props.loaded} size="70" />
				<div className="load-msg">Please wait...</div>
			</div>
		);
	}
}

export default Spinner;
