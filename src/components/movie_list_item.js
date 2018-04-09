import React from 'react';


const MovieListItem = (props) => {
  const posterUrl = () => {
    // Url used to build the images
    const POSTER_URL = `https://image.tmdb.org/t/p/`;
    const  width = `w342`;
    return `${POSTER_URL}${width}`;
  }
  const b = true;

    return (
        <div onClick = {props.showComponent}>
          <img onClick = {() => props.onMovieSelect(props.movie)} src={`${posterUrl()}/${props.movie.poster_path}`} />
        </div>
    )
}

export default MovieListItem;
