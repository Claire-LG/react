var path = require('path')
var workingDir = process.cwd()

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: '/assets/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'webpack-px-to-rem',
            query: {
              basePx: 100,
              min: 1,
              floatWidth: 3
            }
          }
        ]
      },
      {
        test: /.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: `resource/[name]/[name].[ext]`
            }
          }
        ],
        include: /resource/
      }, {
        test: /\.(ttf|eot|svg|woff)(\?[a-z0-9]+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'resource/font/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      Actions: path.resolve(workingDir, 'src/actions/'),
      Components: path.resolve(workingDir, 'src/components/'),
      Containers: path.resolve(workingDir, 'src/containers/'),
      Reducers: path.resolve(workingDir, 'src/reducers/'),
      Routes: path.resolve(workingDir, 'src/routes/'),
      Utils: path.resolve(workingDir, 'src/utils/'),
      Resource: path.resolve(workingDir, 'src/resource/'),
      Style: path.resolve(workingDir, 'src/style/')
    },
    extensions: ['.js', '.css']
  }
}
