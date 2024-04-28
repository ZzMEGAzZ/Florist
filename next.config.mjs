/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['images.unsplash.com', 'via.placeholder.com', 'https://www.gsorchid.com', 'localhost'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.gsorchid.com',
                pathname: '**',
            },
        ],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
