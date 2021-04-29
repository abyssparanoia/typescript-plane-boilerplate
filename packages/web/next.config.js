const path = require('path')
require('dotenv').config()
module.exports = {
  env: {
    API_URL: process.env.API_URL
  },
  webpack: config => {
    config.plugins = config.plugins || []

    config.plugins = [...config.plugins]

    config.resolve.alias['src'] = path.join(__dirname, 'src')
    config.resolve.alias['modules'] = path.join(__dirname, '/src/modules')
    config.resolve.alias['pages'] = path.join(__dirname, '/src/pages')
    config.resolve.alias['components'] = path.join(__dirname, '/src/components')
    config.resolve.alias['states'] = path.join(__dirname, '/src/states')
    return config
  },
  distDir: 'dist/src/.next'
}
