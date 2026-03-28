import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BrandStatement from "@/components/BrandStatement";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import HowItWorks from "@/components/HowItWorks";
import ShopSection from "@/components/ShopSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <BrandStatement />
        <Features />
        <ProductShowcase />
        <HowItWorks />
        <ShopSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
