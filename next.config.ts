import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	eslint: {
		ignoreDuringBuilds: true
	},
	images: {
		remotePatterns: [new URL('http://qiniu.pic.ineet.cn/image/jpg/**')]
	}
};

export default nextConfig;
