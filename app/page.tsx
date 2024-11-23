
import FeaturesSection from "@/ui/sections/FeaturesSection";
import Footer from "@/ui/sections/Footer";
import MainSection from "@/ui/sections/MainSection";


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
