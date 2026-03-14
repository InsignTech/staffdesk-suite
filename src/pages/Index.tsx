import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import PayrollSection from "@/components/PayrollSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeatureGrid />
        <PayrollSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
