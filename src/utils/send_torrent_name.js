const postTorrent = (ev, data, spinnerFunc) => {
	// const openTab = this.openMovie;
	// const closeSpinner = spinnerFunc;
	// console.log(`In upper level: ${open}`);
	ev.preventDefault();
	ev.stopPropagation();
	window.$.ajax({
		type: 'POST',
		url: 'http://localhost:8000/',
		data: data,
		success: function(rec) {
			// let checkStatus = setInterval(open => {
			if (rec) {
				// openTab()
				// .then(() => {
				// console.log(`Data was retrieved: ${rec}\n Stop checking for threshold`);
				// clearInterval(checkStatus);

				// })
				// .then(() => {
				spinnerFunc();
				// console.log(`Spinner is removed`);
				// });
			}
			// }, 1000);
			// console.log(rec);
		},
		error: function(err) {
			spinnerFunc();
			window.alert('Bad response from server');
		},
		dataType: 'json'
	});
};

export default postTorrent;
