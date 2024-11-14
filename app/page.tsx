import TileGrid from "@/ui/components/tile/TileGrid";
import Navbar from "@/ui/navigation/Navbar";
import ContactSection from "@/ui/sections/ContactSection";
import FeaturesSection from "@/ui/sections/FeaturesSection";
import Footer from "@/ui/sections/Footer";
import MainSection from "@/ui/sections/MainSection";
import PurposeSection from "@/ui/sections/PurposeSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-comfortaa">
       <MainSection/>
       <FeaturesSection/>
       {/* <PurposeSection/>
       <ContactSection/> */}
       <Footer/>    
    </main>
  );
}
