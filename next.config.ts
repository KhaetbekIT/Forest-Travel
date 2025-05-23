import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export", // Required for static export
	// Optional for project sites:
	basePath: process.env.NODE_ENV === "production" ? "/Forest-Travel" : "",
	images: {
		unoptimized: true, // Required for static export
	},
};

export default nextConfig;
