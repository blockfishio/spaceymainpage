/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async rewrites() {
    return {beforeFiles:[

      {
        source: '/market',
        destination: '/',
      },
      {
        source: '/dao',
        destination: '/',
      },

      {
        source: '/getspay',
        destination: '/',
      },
    ]
  }},
  images: {
    loader: 'imgix',
    path: 'https://test.spacey2025.com/',
  },

}
