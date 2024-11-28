import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/ui/navigation/Navbar";
import { LoadingProvider } from "@/lib/LoadingContext";
import LoadingIndicator from "@/ui/components/loading/LoadingIndicator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tally Cases",
  description: "POS for diagnostic centers",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LoadingProvider>
        <LoadingIndicator/>
          <body className={inter.className}>
        <Navbar/>
        {children}</body>
      </LoadingProvider>
    
    </html>
  );
}
