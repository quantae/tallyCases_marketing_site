import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/ui/navigation/Navbar";
import { LoadingProvider } from "@/lib/LoadingContext";
import LoadingIndicator from "@/ui/components/loading/LoadingIndicator";
import {GoogleTagManager, GoogleAnalytics} from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tally Cases Company",
  description: "Revenue Management Tool",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId="G-1Z944HJ1DB"/>
      <GoogleTagManager gtmId="G-1Z944HJ1DB" gtmScriptUrl="https://www.googletagmanager.com/gtag/js?id=G-1Z944HJ1DB"/>
      <LoadingProvider>
        <LoadingIndicator />
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </LoadingProvider>

    </html>
  );
}
