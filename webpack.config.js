const path = require('path');

module.exports = {
  mode: 'development',
  entry: './dashboard/client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'dashboard/client/dist'),
    filename: 'bundle.js'
  },
  watch: true,
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.m?js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images',
              esModule: false
            },
          },
        ],
      },
    ]
  }
}