const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';
  
  // Temel config
  const config = {
    entry: {
      background: './src/background/background.js',
      content: './src/content/content.js',
      popup: './src/popup/popup.js',
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: '[name].js',
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.js$/i,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.html$/i,
          use: ['html-loader'],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/popup/popup.html',
        filename: 'popup.html',
        chunks: ['popup'],
        inject: 'body'
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/manifest.json', to: '.' },
          { from: 'src/icons', to: 'icons' },
        ],
      }),
    ]
  };

  // Development-specific configuration
  if (isDevelopment) {
    config.devtool = 'cheap-module-source-map';
    config.devServer = {
      devMiddleware: {
        writeToDisk: true,
      },
      hot: false, // Chrome uzantıları hot reload desteklemez
      liveReload: false,
      port: 3000,
      client: {
        overlay: false, // Browser overlay'ını devre dışı bırak
      }
    };
    
    // CSP gereksinimleri için development build'de ek ayar
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src/manifest.json',
            to: '.',
            transform: (content) => {
              const manifest = JSON.parse(content.toString());
              manifest.content_security_policy = {
                "extension_pages": "script-src 'self' 'wasm-unsafe-eval'; object-src 'self'"
              };
              return JSON.stringify(manifest, null, 2);
            }
          }
        ]
      })
    );
  } else {
    // Production-specific configuration
    config.devtool = false;
    config.optimization = {
      minimize: true,
    };
  }

  return config;
};