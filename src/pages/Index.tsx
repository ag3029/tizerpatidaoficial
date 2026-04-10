import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import IngredientsSection from "@/components/IngredientsSection";
import ReviewsSection from "@/components/ReviewsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import GuaranteeCard from "@/components/GuaranteeCard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <GuaranteeSection />
      <IngredientsSection />
      <ReviewsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <GuaranteeCard />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
