import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
   eslint: {
    ignoreDuringBuilds: true,
  },
  /* config options here */
};
module.exports = {
  crossOrigin: 'anonymous',
}
export default nextConfig;
