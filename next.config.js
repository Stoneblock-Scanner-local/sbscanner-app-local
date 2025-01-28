/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "stoneblock.hr",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/projects/rankings",
        permanent: true,
      },
      {
        source: "/projects",
        destination: "/projects/rankings",
        permanent: true,
      },
      {
        source: "/saved",
        destination: "/saved/projects",
        permanent: true,
      },
    ];
  },
  ...(process.env.NODE_ENV !== "production"
    ? {
        // logging: {
        //   fetches: {
        //     fullUrl: true,
        //   },
        // },
      }
    : {}),
};

module.exports = nextConfig;
