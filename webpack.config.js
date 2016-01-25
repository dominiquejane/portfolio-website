module.exports = {
	entry:
		{main: './portfolioApp/App.component.js'},
	output:
		{filename: 'bundle.js'}, //created by program
	path: './public', //typical
	devtool: 'source map', //optional??
	module: {
		loaders: [ {
			test: /\.js$/,    //takes a regex
			exclude: /node_modules/, //tell loader not to do anything in here
			loader: 'babel' //name of loader
		} ] 
	}
}