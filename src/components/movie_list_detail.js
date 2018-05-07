import React, { Component } from 'react';
import Spinner from './spinner';
import { Link } from 'react-router-dom';
import Movie from '../routes/movie';
import sendTorrent from '../utils/send_torrent_name';

class MovieDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			data: {
				torrent: `${
					this.props.selectedMovie.title
				} ${this.props.selectedMovie.release_date.slice(0, 4)}`
			},
			movieTitle: null
		};
	}
	// jQuery slideDown animation
	slideAndHide = () => {
		this.props.hideComponent();
	};

	openMovie() {
		return new Promise((resolve, reject) => {
			// resolve(window.open('http://www.localhost:8000/'));
		});
	}

	// postTorrent = ev => {
	// 	const openTab = this.openMovie;
	// 	const closeSpinner = this.props.toggleSpinner;
	// 	// console.log(`In upper level: ${open}`);
	// 	ev.preventDefault();
	// 	ev.stopPropagation();
	// 	window.$.ajax({
	// 		type: 'POST',
	// 		url: 'http://localhost:8000/',
	// 		data: this.state.data,
	// 		success: function(rec) {
	// 			let checkStatus = setInterval(open => {
	// 				if (rec === true) {
	// 					// openTab()
	// 					// .then(() => {
	// 					// console.log(`Data was retrieved: ${rec}\n Stop checking for threshold`);
	// 					clearInterval(checkStatus);
	//
	// 					// })
	// 					// .then(() => {
	// 					closeSpinner();
	// 					console.log(`Spinner is removed`);
	// 					document.querySelector('.hide-load').classList.remove('show-load');
	// 					document.querySelector('body').classList.remove('body-load');
	// 					// });
	// 				}
	// 			}, 1000);
	// 		},
	// 		dataType: 'json'
	// 	});
	// };

	render() {
		return (
			<div>
				<div className="detail">
					<div className="text_detail">
						{this.props.selectedMovie.title}
						<div>{this.props.selectedMovie.overview}</div>
						<button id={this.props.selectedMovie.id} onClick={this.loadTorrent}>
							Watch Movie
						</button>
						<button
							onClick={() =>
								this.props.passName(this.props.selectedMovie.original_title)
							}
						>
							<Link to="/movie">Go to movie</Link>
						</button>
					</div>
				</div>
				<div className="after_image_detail">
					<img
						className="image_detail"
						src={`https://image.tmdb.org/t/p/w1280/${
							this.props.selectedMovie.backdrop_path
						}`}
					/>
					<i
						className="fa fa-times fa-2x"
						aria-hidden="true"
						onClick={this.slideAndHide}
					/>
				</div>
				{/* <div className='video-detail col-md-4 float-right'>
             <div className="embed-responsive embed-responsive-16by9">
               <iframe  className="embed-responsive-item" src = {YTURL}  allowFullScreen='true'/>
             </div>
           </div> */}
			</div>
		);
	}
}
export default MovieDetail;

// const MovieDetail = ({selectedMovie, trailer, closeDetail, hideComponent}) => {
//       if(!selectedMovie){
//         return <span></span>
//       }
//       // console.log('Trailer info in MovieDetail: ', trailer)
//       console.log('selectedMovie info in MovieDetail: ', selectedMovie)
//       // const YTURL = `https://www.youtube.com/embed/${trailer.id.videoId}`;
//       // jQuery slideDown animation
//       const slideAndHide = () => {
//         hideComponent();
//       }
//       // Send data to backend to get the magnet link
//       const data = {torrent: `${selectedMovie.title} ${selectedMovie.release_date.slice(0,4)}`};
//       const postTorrent = (ev) => {
//         ev.preventDefault();
//         ev.stopPropagation();
//             window.$.ajax({
//               type: "POST",
//               url: 'http://localhost:8000/',
//               data: data,
//               success: function(rec){
//                 let checkStatus = setInterval(() => {
//                   if(rec){
//                     console.log(`Data was retrieved: ${rec}\n Stop checking for threshold`);
//                     window.open('http://www.localhost:8000/');
//                     clearInterval(checkStatus);
//                   }
//                 },1000);
//               },
//               dataType: 'json'
//         });
//       }
//
//       const toggleSpinner = () => {
//         // this.state.prop = false ?  this.setState({trailer:true}) : this.setState({trailer:false});
//         console.log('Show Item');
//       }
//
//       return (
//         <div>
//           <div className = 'detail'>
//             <div className = 'text_detail'>
//               {selectedMovie.title}
//               <div>{selectedMovie.overview}</div>
//               <button id = {selectedMovie.id} onClick = {postTorrent}>Watch Movie</button>
//             </div>
//           </div>
//             <div className = 'after_image_detail'>
//               <img className = 'image_detail' src = {`https://image.tmdb.org/t/p/w1280/${selectedMovie.backdrop_path}`} />
//               <i className ="fa fa-times fa-2x" aria-hidden="true" onClick = {slideAndHide}></i>
//             </div>
//             {/* <div className='video-detail col-md-4 float-right'>
//               <div className="embed-responsive embed-responsive-16by9">
//                 <iframe  className="embed-responsive-item" src = {YTURL}  allowFullScreen='true'/>
//               </div>
//             </div> */}
//
//       </div>
//       )
// }
// export default MovieDetail;
