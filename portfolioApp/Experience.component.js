import React from 'react';

var Experience = React.createClass({

	render() {
		return (
			<div className="about"> 
				<div className="container">
					<div className="row">

						<div className="col-md-3 title">
							Experience
						</div>

						<div className="col-md-8">
							<div className="container experience-wrapper">

								<div className="row">
									<h3>RECIPE SEARCHER</h3>
									<div>
										<a target="_blank" href="http://recipesearcher.herokuapp.com"><h4>http://recipesearcher.herokuapp.com/</h4></a>
										<h4>Skills utilized:</h4>
										<p>Javascript, AngularJS, HTML, CSS</p>
										<h4>Description: </h4>
										<p>This was a front-end-focused website. It relied on a recipe API from food2fork.com. Users are able to search for recipes based on name or ingredients. Quick searches were also integrated for users to find a quick recipe idea for appetizers, dinners, and desserts. </p>
									</div>
								</div>

								<hr></hr>

								<div className="row">
									<h3>BUCKET LIST</h3>
									<div>
										<a target="_blank" href="https://github.com/dominiquejane/bucket-list"><h4>https://github.com/dominiquejane/bucket-list</h4></a>
										<h4>Skills utilized:</h4>
										<p>Javascript, AngularJS, NodeJS, Express, MongoDB, Mongoose, Bootstrap, PassportJS, HTML, CSS</p>
										<h4>Description: </h4>
										<p>Full-stack website that utilized the Google Maps API. Users were able to create items for a bucket list not only on a regular to-do list, but were able to utilize Google Maps in order to create markers at locations where their bucket list item took place. These markers contained input fields which translated into a corresponding item on the bucket list.</p>
									</div>
								</div>

								<hr></hr>

								<div className="row">
									<h3>SKED.US</h3>
									<div>
										<a target="_blank" href="https://sked.us"><h4>https://sked.us</h4></a>
										<h4>Skills utilized:</h4>
										<p>Javascript, AngularJS, NodeJS, Express, MongoDB, Mongoose, PassportJS, Bootstrap, HTML, CSS</p>
										<h4>Description: </h4>
										<p>My primary role was setting up the authentication and back-end of this full-stack website. This web application aimed to solve the scheduling issues of a nearby non-profit organization. Users were able to create and/or join organizations in order to create and schedule times for mentees to meet with mentors.</p>
									</div>
								</div>

							</div>
						</div>

					</div>
				</div>
			</div>
		)
	}

});

export default Experience;