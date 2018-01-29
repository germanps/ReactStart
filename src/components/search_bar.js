import React, { Component } from 'react';


/*const SearchBar = () => {
	return <input />
}*/
class SearchBar extends Component{
	/*render() {
		return <input onChange={this.onInputChange}/>
	}*/
	render() {
		return <input onChange={event => console.log(event.target.value) } />;
	}

	/*onInputChange(event) {
		//whenever the input changes, run the code inside here
		console.log(event.target.value);
	}*/
}


export default SearchBar;