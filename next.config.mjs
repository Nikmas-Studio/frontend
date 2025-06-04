/** @type {import('next').NextConfig} */
const nextConfig = {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/:path*`,
      },
    ];
  },
  images: {
    // remotePatterns: [new URL('https://nikmas-studio-media.s3.eu-north-1.amazonaws.com/**')],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nikmas-studio-media.s3.eu-north-1.amazonaws.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
