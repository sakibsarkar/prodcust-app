/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'e-cdn-images.dzcdn.net'
            }
        ]
    }
};

export default nextConfig;
