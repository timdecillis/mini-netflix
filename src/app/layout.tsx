import type { Metadata } from "next";

import Header from "@/components/Header/Header";
import Search from "@/components/Search/Search";
import "@/styles/globals.scss";

export const metadata: Metadata = {
  title: "Mini IMDb",
  description: "Coding assessment for XCentium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Search />
        {children}
      </body>
    </html>
  );
}
