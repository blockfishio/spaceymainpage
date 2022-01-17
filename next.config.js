/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    exportTrailingSlash: true,
    async rewrites() {
        return {
            beforeFiles: [

                {
                    source: '/market',
                    destination: '/',
                },
                {
                    source: '/dao',
                    destination: '/',
                },
                {
                  source:'/leaderboard',
                  destination:'/'
                },

                {
                  source: '/community',
                  destination: '/',
                },
            ]
        }
    },
    images: {
        loader: 'imgix',
        path: 'https://spacey2025.com/'
    },
}
