import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Turbopack is enabled by default in Next.js 16
  turbopack: {},
  // Images optimisées
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
