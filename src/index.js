//Import React
import React from 'react';
//import ReactDom
import ReactDOM from 'react-dom';

// Crate a nuew component. This component should produce some HTML
const App = function() {
	return <div> Hi! </div>;
}

//Take this component's generated HTML and put it on the page in the DOM
React.render(<App >);
