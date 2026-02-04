import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your existing Next.js config
  // Silence Turbopack vs Webpack warning in Next.js 16
  turbopack: {},
};

export default withPWA(nextConfig);
