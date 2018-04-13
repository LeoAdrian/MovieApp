import React from 'react';

const MovieDetail = ({selectedMovie, trailer, closeDetail, hideComponent}) => {
      if(!selectedMovie){
        return <span></span>
      }

      // console.log('Trailer info in MovieDetail: ', trailer)
      console.log('selectedMovie info in MovieDetail: ', selectedMovie)
      // const YTURL = `https://www.youtube.com/embed/${trailer.id.videoId}`;

      // jQuery slideDown animation
      const slideAndHide = () => {
        hideComponent();
      }

// Send data to backend to get the magnet link
      const data = {torrent: `${selectedMovie.title} ${selectedMovie.release_date.slice(0,4)}`};

      const postTorrent = (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        // fetch('http://localhost:8000/', {
        //           method: 'POST',
        //           body: JSON.stringify(data),
        //           headers: new Headers({
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //           })
        //         })
          window.$.post("http://localhost:8000/",data,function(){
            alert('Data was sent to the server');
        });
}



      return (
        <div>
          <div className = 'detail'>
            <div className = 'text_detail'>
              {selectedMovie.title}
              <div>{selectedMovie.overview}</div>
              <button id = {selectedMovie.id} onClick = {postTorrent}>Watch Movie</button>
            </div>
          </div>
            <div className = 'after_image_detail'>
              <img className = 'image_detail' src = {`https://image.tmdb.org/t/p/w1280/${selectedMovie.backdrop_path}`} />
              <i className ="fa fa-times fa-2x" aria-hidden="true" onClick = {slideAndHide}></i>
            </div>
            {/* <div className='video-detail col-md-4 float-right'>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe  className="embed-responsive-item" src = {YTURL}  allowFullScreen='true'/>
              </div>
            </div> */}
      </div>

      )
}

export default MovieDetail;
