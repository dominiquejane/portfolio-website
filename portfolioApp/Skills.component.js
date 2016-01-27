import React from 'react';

var Skills = React.createClass({

	render() {
		return (
			<div className="row skills"> 
				<div className="container">
					<div className="row">

						<div className="col-md-3 title">
							Skills
						</div>

						<ul className="col-sm-8 skills-list">

							<div className="row">
								<li className="col-sm-2 col-sm-offset-2">
									<div><img src="images/jslogo.png" /></div>
									Javascript
								</li>
								<li className="col-sm-4">
									<div><img src="images/Angularlogo.png" /></div>
									AngularJS
								</li>
								<li className="col-sm-2">
									<div><img src="images/nodejs-icon.png" /></div>
									  NodeJS
								</li>
							</div>	

							<div className="row">
								<li className="col-sm-3">
									<div><img src="images/mongodb-logo.png" /></div>
									MongoDB
								</li>
								<li className="col-sm-3">
									<div><img src="images/mongoose.png" /></div>
									Mongoose
								</li>
								<li className="col-sm-3">
									<div><img src="images/HTML5.png" /></div>
									HTML
								</li>
								<li className="col-sm-3">
									<div><img src="images/css.png" /></div>
									CSS
								</li>
							</div>

							<div className="row">
								<li className="col-sm-3 col-sm-offset-1">
									<div><img src="images/passport.png" /></div>
									PassportJS
								</li>
								<li className="col-sm-2">
									<div><img src="images/boot.png" /></div>
									Bootstrap
								</li>
								<li className="col-sm-2">
									<div><img src="images/react.png" /></div>
									React
								</li>
								<li className="col-sm-2">
									<div><img src="images/firebase.png" /></div>
									Firebase
								</li>
							</div>							
							
						</ul>
					</div>

				</div>
			</div>
		)
	}

});

export default Skills;