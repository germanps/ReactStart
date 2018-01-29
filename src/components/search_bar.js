import React, { Component } from 'react';


/*const SearchBar = () => {
	return <input />
}*/
class SearchBar extends Component{
	render() {
		return <input onChange={this.onInputChange}/>
	}

	onInputChange() {
		//whenever the input changes, run the code inside here

	}
}


export default SearchBar;