/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xkzfjcxdsqejrmvbgrvh.supabase.co",
        port: "",
      },
      {
        protocol: "https",
        hostname: "xkzfjcxdsqejrmvbgrvh.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/avatars/**",
      },
    ],
  },
};

export default nextConfig;
