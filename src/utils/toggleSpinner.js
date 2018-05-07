export default (toggleSpinner = loading => {
	loading === true
		? this.setState({ loading: false })
		: this.setState({ loading: true });
	document.querySelector('.hide-load').classList.toggle('show-load');
	document.querySelector('body').classList.toggle('body-load');
	// console.log(this.state.loading);
	console.log('You clicked the button');
});
