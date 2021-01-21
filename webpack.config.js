const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/react_loader.js',
  externals: {
    'react': 'React', // Case matters here 
    'react-dom' : 'ReactDOM' // Case matters here 
   },
  module: {
    rules: [
      //Allows use javascript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, //don't test node_modules folder
        use: {
            loader: "babel-loader",
        },
        resolve: {
            extensions: [".js", ".jsx"],
        },
    }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  }
};