'use client';
import type { Metadata } from "next";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { LoadingProvider, useLoading } from "@/lib/LoadingContext";
import LoadingIndicator from "@/ui/components/loading/LoadingIndicator";

import FeaturesSection from "@/ui/sections/FeaturesSection";
import Footer from "@/ui/sections/Footer";
import MainSection from "@/ui/sections/MainSection";

function RouteChangeHandler() {
  const { setIsLoading } = useLoading();
  const pathname = usePathname(); // Tracks the current route

  useEffect(() => {
    // Show loading indicator when the route changes
    setIsLoading(true);

    // Simulate the completion of route loading
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust this delay to match your app's behavior

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [pathname, setIsLoading]); // Runs whenever the route changes

  return null;
}

const metadata: Metadata = {
  title: "Tally Cases Company",
  description: "Revenue Management Tool",
};

export default function Home() {
  return (
    <LoadingProvider>
      <RouteChangeHandler />
      <LoadingIndicator />
      <main className="flex min-h-screen flex-col items-center justify-between font-comfortaa">
        <title>Tally Cases Company Home</title>
        <MainSection />
        <FeaturesSection />
        <Footer />
      </main>
    </LoadingProvider>
  );
}
