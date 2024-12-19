import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import AutoSlide from "@/components/AutoSlide";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const images = [
    "https://desainkreasi.com/web/web-design-bandung/media/images/Desain-Kreasi-Web-Design-Banner.jpg",
    "https://desainkreasi.com/web/web-design-bandung/media/images/Desain-Kreasi-Web-Design-Banner.jpg",
    "https://desainkreasi.com/web/web-design-bandung/media/images/Desain-Kreasi-Web-Design-Banner.jpg",
  ];
  return (
    <div>
      <Navbar />

      {/* Slider */}
      <AutoSlide images={images} />

      {/* Cards */}
      <ServiceCard />

      
      {/* Footer */}
      <Footer />
    </div>
  );
}
