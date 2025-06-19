import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
	title: "Er. Peris Raj KC - Portfolio",
	description: "Personal Portfolio Website",
	icons: {
		icon: '/favico.png',
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning className="scroll-smooth">
			<body className="antialiased flex flex-col">
				<ThemeProvider attribute="class" defaultTheme="dark">
					<Toaster duration={2500} position="bottom-center" richColors />
					<Navbar />
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
};
