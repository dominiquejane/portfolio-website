import React from 'react';

var Connect = React.createClass({

	render() {
		return (
			<div > 
				<nav className="navbar navbar-inverse">
				  <div className="container-fluid">
				    <div className="navbar-header active">
				      Connect:
				    </div>
				      <ul className="nav navbar-nav">
				        <li><a href="#"><img src="../Images/Twitter.png" /></a></li>
				        <li><a href="#"><img src="../Images/Github.jpg" /></a></li>
				        <li><a href="#"><img src="../Images/Linkedin.png" /></a></li>
				      </ul>
				  </div>
				</nav>
			</div>
		)
	}

});

export default Connect;

