import React from 'react';
import ReactDOM from 'react-dom';

// Crate a nuew component. This component should produce some HTML
/*const App = function() {
	return <div> Hi! </div>;
}*/
const App = () => {
	return <div> Hi! devs </div>;
}

//Take this component's generated HTML and put it on the page in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
