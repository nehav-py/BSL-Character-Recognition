
import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import DemoSection from "@/components/DemoSection";
import HowItWorks from "@/components/HowItWorks";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeatureSection />
      <HowItWorks />
      <DemoSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
