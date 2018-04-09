import React, { Component } from 'react';
// Package for react carousel
import Slider from 'react-slick';
import MovieItem from './movie_carousel_item'


const MovieCarousel = ({movies}) => {
  // If React tries to render the component before the data is passed
  //render some text with info

  if(!movies){
    return <div>Fetching data...</div>
  }

// Mapping through the carousel movies and returning a component
// for each item in the array

const movieList = movies.map((movie) => {
  console.log(movie)
  return (
    <div key = {movie.id}>
      <MovieItem
       movie = {movie}/>
    </div>
  )
})

// Carousel settings
    let settings = {
      dots:false,
      infinite: true,
      autoplay:true,
      speed: 950,
      slidesToShow:1,
      slidesToScroll:1,
      class:'slides'

    }

    return (
// Carousel syntax with spread operators
// Passing the result from the mapping with movieList const
      <Slider {...settings}>
        {movieList}
      </Slider>

    )
}

export default MovieCarousel;
