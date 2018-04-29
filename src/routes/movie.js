import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Movie = (props) => {
  console.log(`Movie Title in Movie.js is: ${props.movieTitle}`);
  // if(props.movieTitle === null){
  //   return <Redirect to="/" />
  // } else {
    return (
      // <ul>
      <div>
        <h4>{props.movieTitle} Page</h4>
        <Link to="/">
              <button>Go to home</button>
        </Link>
      </div>
      // </ul>
    )
  }
// }

export default Movie;
