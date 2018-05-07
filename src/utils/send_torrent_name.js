const postTorrent = (ev, data, spinnerFunc) => {
	// const openTab = this.openMovie;
	const closeSpinner = spinnerFunc;
	// console.log(`In upper level: ${open}`);
	ev.preventDefault();
	ev.stopPropagation();
	window.$.ajax({
		type: 'POST',
		url: 'http://localhost:8000/',
		data: data,
		success: function(rec) {
			// let checkStatus = setInterval(open => {
			// 	if (rec === true) {
			// 		// openTab()
			// 		// .then(() => {
			// 		// console.log(`Data was retrieved: ${rec}\n Stop checking for threshold`);
			// 		clearInterval(checkStatus);
			//
			// 		// })
			// 		// .then(() => {
			// 		closeSpinner();
			// 		console.log(`Spinner is removed`);
			// 		document.querySelector('.hide-load').classList.remove('show-load');
			// 		document.querySelector('body').classList.remove('body-load');
			// 		// });
			// 	}
			// }, 1000);
			console.log(rec);
		},
		dataType: 'json'
	});
};

export default postTorrent;
