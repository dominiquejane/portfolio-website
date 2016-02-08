import React from 'react';

var Education = React.createClass({

	render() {
		return (

			<div className="row skills education"> 
				<div className="container">
					<div className="row">

						<div className="col-md-3 title">
							Education
						</div>

						<div className="container col-md-8">

							<a target="_blank" href="https://devmounta.in/">
								<div className="col-sm-6">
									<h3>DEVMOUNTAIN</h3>
									<div>
										<h4>Graduated January 2016</h4>
										<h4>Web Development</h4>
									</div>
								</div>
							</a>

							<a target="_blank" href="http://www.uvu.edu/">
								<div className="col-sm-6">
									<h3>UTAH VALLEY UNIVERSITY</h3>
									<div>
										<h4>Graduated December 2014</h4>
										<h4>Integrated Studies</h4>
									</div>
								</div>
							</a>
													
						</div>

					</div>
				</div>
			</div>




		

			
		)
	}

});

export default Education;