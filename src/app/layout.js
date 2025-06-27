'use client";'


import { Geist, Geist_Mono } from "next/font/google";
import AntdLayout from "./components/AntdLayout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GMAT Practice App",
  description: "Practice GMAT Analytical Writing and Integrated Reasoning",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AntdLayout>{children}</AntdLayout>
      </body>
    </html>
  );
}
