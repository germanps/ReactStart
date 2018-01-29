import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

//Api youtube key
const API_KEY = 'AIzaSyB5qZ1oTgSYt1dM6df0Om8Yxgrpj_hoABo';

class App extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = { videos: [] };

	  YTSearch({key: API_KEY, term: 'dark souls 3'}, (videos) => {
			this.setState({ videos});
			// that is the same = this.setState({ videos: videos });
		});
	}

	render() {
		return (
				<div> 
					<SearchBar />
			   </div>
	    );
	}
}

//Take this component's generated HTML and put it on the page in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
