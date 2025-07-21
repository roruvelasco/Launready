import Navbar from "./nav_bar";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import Services from "./Services";
import Footer from "./Footer";
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />

        <FeatureSection />

        <Services />

        <Footer />
      </div>
    </>
  );
}
