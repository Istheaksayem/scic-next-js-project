/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
    images: {
    // domains: ["i.ibb.co"], 
    remotePatterns:[
      {
       protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      }
    ]
  },
};

export default nextConfig;
