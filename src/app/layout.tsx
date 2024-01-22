import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header/Header";
import Search from "@/components/Search/Search";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mini Netflix",
  description: "Code assessment for Xcentium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Search />
        {children}
      </body>
    </html>
  );
}
