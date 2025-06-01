const NFTGrid = ({ children }: Readonly<{ children?: React.ReactNode }>) => {
	return (
		<div className="grid grid-flow-row grid-cols-4 gap-[20px]">
			{children}
		</div>
	);
};

export default NFTGrid;
