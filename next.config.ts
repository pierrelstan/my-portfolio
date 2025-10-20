import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",

  // Base path should match your repository name
  basePath: isProd ? "/my-portfolio" : undefined,

  // Ensure assets resolve correctly on Pages
  assetPrefix: isProd ? "/my-portfolio/" : undefined,

  // Avoid server image optimization for static export
  images: {
    unoptimized: true,
  },

  // Generate folder-style routes with index.html for GH Pages
  trailingSlash: true,
};

export default nextConfig;

