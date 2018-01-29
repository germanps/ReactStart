import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

//Api youtube key
const API_KEY = 'AIzaSyB5qZ1oTgSYt1dM6df0Om8Yxgrpj_hoABo';

// Crate a nuew component. This component should produce some HTML
/*const App = function() {
	return <div> Hi! </div>;
}*/
const App = () => {
	return (
			<div> 
				<SearchBar />
		   </div>
    );
}

//Take this component's generated HTML and put it on the page in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
