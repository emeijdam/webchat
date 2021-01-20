const path = require('path');

module.exports = {
  entry: './src/dasc_chat.js',
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
    filename: 'dasc_chat.js',
  },
};