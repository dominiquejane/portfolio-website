import React 			from 'react';
import ReactDOM 	from 'react-dom';

import About 			from './About.component';
import Connect 		from './Connect.component';
import Skills 		from './Skills.component';
import Experience from './Experience.component';
import Education 	from './Education.component';
import Intro 			from './Intro.component';


var App = React.createClass({
     
     
 render() {
  return (
	   <div>
	   	<Connect />
	   	<div className="background">
				<Intro />
		   	<About />
		   	<Skills />
		   	<Experience />
		   	<Education />
	   	</div>
	   	<footer className="navbar navbar-inverse"></footer>
	   </div>
  )
 },


});










ReactDOM.render(<App />, document.getElementById('app'));