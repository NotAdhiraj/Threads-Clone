import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";

import "../globals.css";

export const metadata = {
	title: "Threads",
	description: "A Threads Clone",
};

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={`${poppins.className} bg-dark-1`}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
