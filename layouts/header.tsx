import { ChildrenProps } from '@/types/type';
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuLink
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

const Header = ({ children }: ChildrenProps) => {
	return (
		<header className="flex h-[75px] w-full flex-row items-center justify-between bg-amber-300 px-[40px]">
			<div className="flex flex-row items-center justify-start gap-x-2.5">
				<div className="text-[24px]">LOGO</div>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuLink
								href="/swap"
								className="px-4 py-1 hover:bg-amber-100"
							>
								Swap
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink
								href="/pool"
								className="px-4 py-1 hover:bg-amber-100"
							>
								Pool
							</NavigationMenuLink>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>
			<div className="flex flex-row items-center">{children}</div>
		</header>
	);
};

export default Header;
