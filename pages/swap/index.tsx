import {
	FormField,
	FormItem,
	FormControl,
	FormLabel,
	Form
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useEffect, useState } from 'react';
const Swap = () => {
	const { isConnected } = useAccount();
	const [connected, setConnected] = useState(false);

	useEffect(() => {
		setConnected(isConnected);
	}, [isConnected]);

	const form = useForm<{ from: string; to: string }>({
		defaultValues: {
			from: '',
			to: ''
		}
	});

	function onSubmit(data: unknown) {
		console.log('Form submitted:', data);
	}
	return (
		<div className="container mx-auto flex flex-row items-center justify-center pt-[150px]">
			<div className="dialog w-[500px] rounded-xl bg-gray-50 p-[25px] shadow-xl">
				<Form {...form}>
					<form
						className="flex flex-col justify-center gap-y-[35px]"
						onSubmit={form.handleSubmit(onSubmit)}
					>
						<FormField
							control={form.control}
							name="from"
							render={({ field }) => (
								<FormItem>
									<FormLabel>From</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="From"
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="to"
							render={({ field }) => (
								<FormItem>
									<FormLabel>To</FormLabel>
									<FormControl>
										<Input
											type="number"
											placeholder="To"
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						{connected ? (
							<Button
								size="lg"
								type="submit"
								className="mt-[25px] w-full"
							>
								Submit
							</Button>
						) : (
							<ConnectButton />
						)}
					</form>
				</Form>
			</div>
		</div>
	);
};

export default Swap;
