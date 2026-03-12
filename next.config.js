/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'i.pravatar.cc' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'fastly.picsum.photos' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'academy.dandela.com' },
      { protocol: 'https', hostname: 'pub-712a9a956c69430b9a5d734e102929f2.r2.dev' },
    ],
  },
}

module.exports = nextConfig
