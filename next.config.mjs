/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com", 
            },
            {
        protocol: "https",
        hostname: "utfs.io", // ✅ AJOUT OBLIGATOIRE
      },
      {
        protocol: "https",
        hostname: "*.utfs.io", // ✅ Par sécurité (sous-domaines possibles)
      },
        ],
    },
};

export default nextConfig;
