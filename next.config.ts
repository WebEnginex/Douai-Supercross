import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/riders", destination: "/pilotes", permanent: true },
      { source: "/informations", destination: "/#informations", permanent: false },
    ];
  },
};

export default nextConfig;
