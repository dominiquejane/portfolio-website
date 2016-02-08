
import React 			from 'react';
import ReactDOM 	from 'react-dom';

import About 			from './About.component.js';
import Connect 		from './Connect.component.js';
import Skills 		from './Skills.component.js';
import Experience from './Experience.component.js';
import Education 	from './Education.component.js';
import Intro 			from './Intro.component.js';



var App = React.createClass({
     
     
<<<<<<< HEAD
     render() {
          return (
               <div>
               
               </div>
          )
     }
})








=======
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
>>>>>>> master


ReactDOM.render(<App />, document.getElementById('app'));