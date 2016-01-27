import React from 'react';

var About = React.createClass({

	render() {
		return (
			<div className="about"> 
				<div className="container">
				<div className="row">
					<div className="col-md-3 title">About Me</div>

					<div className="col-md-8 about-text">
						<p>
							I am a web developer from Dallas, TX. I love finding creative ways to solve problems and learn from different perspectives. I have created websites with Javascript, AngularJS, NodeJS, MongoDB and Bootstrap, to name a few. I am currently learning to build with React (e.g. this website you are looking at was built with React!). I am currently looking for opportunities that will challenge me and help me grow as a web developer.
						</p>
					</div>
					</div>
				</div>
			</div>
		)
	}

});

export default About;