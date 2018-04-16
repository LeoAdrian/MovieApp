import React from 'react';
import { RingLoader } from 'react-spinners';

class Spinner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='sweet-loading'>
        <RingLoader
          color={'#A0A0A0'}
          loading={this.props.load}
          size='200'
        />
      </div>
    )
  }
}

export default Spinner;
