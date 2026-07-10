import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/riders", destination: "/pilotes", permanent: true },
      { source: "/billeterie", destination: "/#tickets", permanent: false },
      { source: "/informations", destination: "/#tickets", permanent: false },
      { source: "/programme", destination: "/#tickets", permanent: false },
    ];
  },
};

export default nextConfig;
