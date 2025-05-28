'use client';

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

const Swap = () => {
	const { isConnected } = useAccount();

	const form = useForm({
		defaultValues: {
			from: '',
			to: ''
		}
	});
	return (
		<div className="container flex flex-row items-center justify-center">
			<div className="dialog w-[500px]">
				<Form {...form}>
					<form className="flex flex-col justify-center gap-y-[15px]">
						<FormField
							control={form.control}
							name="from"
							render={({ field }) => (
								<FormItem>
									<FormLabel>From</FormLabel>
									<FormControl>
										<Input placeholder="From" {...field} />
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
										<Input placeholder="To" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
						{isConnected ? (
							<Button type="submit" className="mt-[25px] w-full">
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
