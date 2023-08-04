/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mediaim.expedia.com',
            },
        ],
    }
};

module.exports = nextConfig;
