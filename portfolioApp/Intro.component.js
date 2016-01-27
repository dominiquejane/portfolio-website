import React from 'react';

var Intro = React.createClass({

	render() {
		return (
			<div> 
				<div className="container row">

					<div className="col-md-5">
						<div className="ism-slider" id="my-slider">
						  <ol>
						    <li>
						      <img src="ism/image/slides/_u/1453831504821_442453.jpg" />
						    </li>
						    <li>
						      <img src="ism/image/slides/_u/1453831438157_726654.jpg" />
						    </li>
						    <li>
						      <img src="ism/image/slides/_u/1453831509190_767687.jpg" />
						    </li>
						    <li>
						      <img src="ism/image/slides/_u/1453831499184_511841.jpg" />
						    </li>
						  </ol>
						</div>
						
					</div>

					<div className="col-md-7 intro">
						<h1 className="name pull-right">DOMINIQUE LIAU</h1>
						<p className="title pull-right">WEB DEVELOPER</p>
					</div>

				</div>
			</div>
		)
	}

});

export default Intro;