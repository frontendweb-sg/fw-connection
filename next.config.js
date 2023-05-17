const path = require('path');


/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['mongoose']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

}

module.exports = nextConfig
