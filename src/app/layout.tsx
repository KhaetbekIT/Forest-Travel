import type { ReactNode } from "react";
import "@/css/main.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "ФорестТревел",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return children;
}
