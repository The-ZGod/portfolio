import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll"; 
import ScrollProgress from "@/components/ScrollProgress";
import PageLoader from "@/components/PageLoader";
import CommandPalette from "@/components/CommandPalette";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arihant Alagoudar — Software Engineer",
  description:
    "Portfolio of Arihant Alagoudar — software engineer focused on full-stack development and AI/ML.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased`}
      >
        <PageLoader />
        <CommandPalette />

        <ThemeProvider>
          <SmoothScroll />
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}