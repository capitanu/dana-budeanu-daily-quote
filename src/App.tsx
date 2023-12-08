import React from 'react';
import logo from './logo.svg';
import './App.css';

import Instagram from './instagram/Instagram';

function App() {
  return (
	<div className="App">
	  <header className="App-header">
		<p>
		  Dana Budeanu - Quote of the day
		</p>
		<Instagram />
	  </header>
	</div>
  );
}

export default App;
