import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { WagmiProvider } from 'wagmi';
import { config } from '@/config/wagmi.cfg';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import Header from '@/layouts/header';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<RainbowKitProvider>
					<Header>
						<ConnectButton />
					</Header>
					<div style={{ height: 'calc(100vh - 75px)' }}>
						<Component {...pageProps} />
					</div>
				</RainbowKitProvider>
			</QueryClientProvider>
		</WagmiProvider>
	);
}
