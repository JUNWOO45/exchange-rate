const path = require('path');

module.exports = {
  mode: 'development',
  entry: './ts_index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    { test: /\.ts$/, use: 'awesome-typescript-loader' },
    { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".json"]
  }
}
