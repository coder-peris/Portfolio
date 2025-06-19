"use client";
import type { FC, ReactNode } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

const ToggleThemeButton = dynamic(() => import('@/components/toggle-theme-button'),
	{ ssr: false }
);

const Navbar: FC = (): ReactNode => {
	const navItems = [
		{ label: "About", href: "/#about" },
		{ label: "Projects", href: "/#projects" },
		{ label: "Skills", href: "/#skills" },
		{ label: "Contact", href: "/#contact" },
	];

	return (
		<header className="sticky top-0 z-1 w-full border-b border-muted-foreground/50 bg-background/90 backdrop-blur">
			<div className="h-12 sm:h-16 flex flex-row justify-between items-center max-w-5xl mx-auto">

				<nav className="pl-4 flex items-center gap-4 md:gap-16 text-md text-foreground/80 font-medium">
					{navItems.map((x, idx) =>
						<Link key={idx} href={x.href} className="transition-colors hover:text-foreground">
							{x.label}
						</Link>
					)}
				</nav>

				<ToggleThemeButton />

			</div>
		</header>
	);
};

export default Navbar;