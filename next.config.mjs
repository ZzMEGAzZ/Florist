/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['images.unsplash.com', 'via.placeholder.com', 'https://www.gsorchid.com', 'localhost', '5425-27-55-93-130.ngrok-free.app', 'https://5425-27-55-93-130.ngrok-free.app'],
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
