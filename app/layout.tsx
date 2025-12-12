import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Tsakani and Harold",
  description: "A wedding website for Tsakani and Harold",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-white via-stone-50 to-rose-50"
      >
        {children}
      </body>
    </html>
  );
}
