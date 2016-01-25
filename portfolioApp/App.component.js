import React 			from 'react';
import ReactDOM 	from 'react-dom';

import About 			from './About.component.js';
import Connect 		from './Connect.component.js';
import Skills 		from './Skills.component.js';
import Experience from './Experience.component.js';
import Education 	from './Education.component.js';


var App = React.createClass({
     
     
 render() {
  return (
	   <div>
	   	<Connect />
	   	<About />
	   	<Skills />
	   	<Experience />
	   	<Education />
	   </div>
  )
 },


});










ReactDOM.render(<App />, document.getElementById('app'));