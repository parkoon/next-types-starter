const path = require('path')
const Dotenv = require('dotenv-webpack')
const withImages = require('next-images')

module.exports = withImages({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      // https://www.npmjs.com/package/dotenv-webpack
      new Dotenv({
        path: path.join(__dirname, '.env'),
        safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
        systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
        silent: true, // hide any errors
        defaults: false, // load '.env.defaults' as the default values if empty.
      })
    )

    return config
  },
})
