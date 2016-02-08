module.exports = {
	entry:
		{
			main: './portfolioApp/App.component.js'
		},
	output:
		{
			filename: 'bundle.js',
			path: './public', //typical
		}, //created by program
	devtool: 'source map', //optional??
	module: {
		loaders: [ {
			test: /\.js$/,    //takes a regex
			exclude: /node_modules/, //tell loader not to do anything in here
			loader: 'babel' //name of loader
		} ] 
	}
}