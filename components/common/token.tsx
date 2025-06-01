import React from 'react';
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
	SelectGroup
} from '@/components/ui/select';
import Image from 'next/image';

export const TokenList = ({
	defaultValue,
	onChange
}: {
	defaultValue: string;
	onChange: (value: string) => void;
}): React.ReactNode => {
	return (
		<Select
			defaultValue={defaultValue}
			onValueChange={(value) => onChange(value)}
		>
			<SelectTrigger>
				<SelectValue placeholder="Select a fruit" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem value="1">
						<TokenItem url="/token-icon.webp" name="USDC" />
					</SelectItem>
					<SelectItem value="2">
						<TokenItem url="/token-icon.webp" name="ETHC" />
					</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	);
};

export const TokenItem = ({ url, name }: { url: string; name: string }) => {
	return (
		<div className="flex flex-row items-center gap-x-1">
			<Image
				src={url}
				width={15}
				height={15}
				alt="Picture of the author"
				style={{
					borderRadius: '50%'
				}}
			/>
			<span>{name}</span>
		</div>
	);
};
