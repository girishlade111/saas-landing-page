/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/saas-landing-page',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig