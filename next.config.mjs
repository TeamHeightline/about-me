/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {unoptimized: true},
    basePath: '/about-me',
    assetPrefix: '/about-me/',
};

export default nextConfig;
