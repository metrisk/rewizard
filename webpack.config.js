const path = require('path')

/**
 * Plugins
 */
const Bundle = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const Output = require('write-file-webpack-plugin')
const Prettier = require('prettier-webpack-plugin')
const Terser = require('terser-webpack-plugin')

/**
 * Paths
 */
const root = path.resolve(__dirname)
const src = `${root}/src/`
const dist = `${root}/dist/`

/**
 * Config
 */
const config = (env) => {
  const mode = env ? env.NODE_ENV : 'development'
  const dev = mode === 'development'
  console.log('MODE:', mode)

  return {
    context: root,
    mode: mode, // For hooks to work whilst developing locally - https://github.com/facebook/react/issues/13991,
    devtool: dev && 'inline-source-map',
    devServer: {
      contentBase: dist,
      historyApiFallback: true,
      compress: true,
      host: '0.0.0.0',
      disableHostCheck: true,
      port: 3001
    },
    entry: {
      'index': `${src}/index.ts`,
    },
    output: {
      pathinfo: false,
      path: dist,
      publicPath: '/',
      filename: '[name].js',
      chunkFilename: '[name].js',
      libraryTarget: 'commonjs'
    },
    optimization: {
      minimize: dev ? false : true,
      minimizer: dev ? [] : [new Terser()]
    },
    externals: ['react', 'react-router-dom'],
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      alias: {
        '@app': `${src}/`,
        '@components': `${src}/components/`,
      },
      modules: ['node_modules']
    },
    plugins: [
      // dev && new Bundle(),
      // dev && new Output(),
      new Prettier({
        printWidth: 120,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: true,
        arrowParens: 'always',
        encoding: 'utf-8',
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.json']
      }),
    ].filter((x) => !!x),
    module: {
      rules: [
        {
          test: /\.(tsx|ts)$/,
          exclude: /node_modules/,
          loader: 'ts-loader'
        }
      ]
    }
  }
}

module.exports = config