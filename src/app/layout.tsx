import type { Metadata } from "next";
import Head from "next/head";

import Header from "@/components/Header/Header";
import Search from "@/components/Search/Search";
import "@/styles/globals.scss";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Mini Netflix",
  description: "Coding assessment for XCentium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title as ReactNode}</title>
      </Head>
      <body>
        <Header />
        <Search />
        {children}
      </body>
    </html>
  );
}
