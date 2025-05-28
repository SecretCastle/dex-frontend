import { createConfig, http } from 'wagmi';
import { sepolia } from 'wagmi/chains';

export const config = createConfig({
	chains: [sepolia],
	transports: {
		[sepolia.id]: http(
			'https://eth-sepolia.g.alchemy.com/v2/niDwl3HblCA5zgt5MgZZfvDu3TrOAm8I'
		)
	}
});
