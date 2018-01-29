import React, { Component } from 'react';


/*const SearchBar = () => {
	return <input />
}*/
class SearchBar extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = { term: '' };
	}
	/*render() {
		return <input onChange={this.onInputChange}/>
	}*/
	render() {
		return (
			<div>
				<input onChange={event => this.setState({ term: event.target.value}) } /><br />
				<span>Value of the input: {this.state.term} </span> 
			</div>
		);
	}

	/*onInputChange(event) {
		//whenever the input changes, run the code inside here
		console.log(event.target.value);
	}*/
}


export default SearchBar;