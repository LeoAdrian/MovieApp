import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Movies = (props) => {
  console.log('Movies component');
  console.log(`Nr of movies: ${props.listOfMovies.length}`);
  const listMovies = props.listOfMovies.map( movie =>
      <li key = {movie.id}>{movie.title}</li>
  );
  // const numbers = [1, 2, 3, 4, 5];
// const listItems = props.listOfMovies.map((numbers) =>
//   <li>{numbers.title}</li>
// );
    return (
      <div>
        <ul>
          {listMovies}
        </ul>

      </div>
    )
}


export default Movies;
