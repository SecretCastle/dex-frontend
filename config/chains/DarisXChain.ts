import {
	MARKET_ADDRESS,
	NFT_ADDRESS,
	TOKEN_ADDRESS
} from '@/contracts/address';
import { defineChain } from 'viem';

export const DarisXChain = defineChain({
	id: 31337,
	name: 'DarisX Chain',
	nativeCurrency: {
		name: 'DarisX',
		symbol: 'DX',
		decimals: 18
	},
	rpcUrls: {
		default: {
			http: ['http://127.0.0.1:8545'] // Replace with your DarisX RPC URL
		}
	},
	contracts: {
		MyToken: {
			address: TOKEN_ADDRESS
		},
		MyNFT: {
			address: NFT_ADDRESS
		},
		MyMarketplace: {
			address: MARKET_ADDRESS
		}
	}
});
