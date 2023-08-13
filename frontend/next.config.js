/** @type {import('next').NextConfig} */
const path = require('path');
require('dotenv').config();

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, '/src/assets')],
    },
}

module.exports = nextConfig
