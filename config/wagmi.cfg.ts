import { createConfig, http } from 'wagmi';
import { sepolia, mainnet, celo } from 'wagmi/chains';
import { DarisXChain } from './chains/DarisXChain';

export const config = createConfig({
	chains: [sepolia, mainnet, celo, DarisXChain],
	transports: {
		[sepolia.id]: http(
			'http://127.0.0.1:8545' // Replace with your Sepolia RPC URL
		),
		[mainnet.id]: http(),
		[celo.id]: http(),
		[DarisXChain.id]: http()
	}
});
