import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Movie = (props) => {
  console.log('Movie component');
  // console.log('Title: ' + props.singleMovie)
  // if(props.movieTitle === null){
  //   return <Redirect to="/" />
  // } else {
    return (
      // <ul>
      <div>
        {/* <h4>{props.singleMovie.title} Page</h4> */}
        <Link to="/">
              <button>Go to homepage</button>
        </Link>
      </div>
      // </ul>
    )
  }
// }

export default Movie;
