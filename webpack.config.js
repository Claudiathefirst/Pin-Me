const isDev = process.env.Node_ENV === 'development';
module.exports = {
  mode: isDev ? development : production,
  entry: ['@babel/polyfill', './client/index.js'],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  devtool: 'source-map',
  WatchOptions: { ignored: /node_modules/ },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
        },
      },
    ],
  },
};
