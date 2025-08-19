import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TestimonialSwiper from "@/components/TestimonialSwiper";
import CoreCompetencies from "@/components/CoreCompetencies";
import FacultyShowcase from "@/components/FacultyShowcase";
import ValueContent from "@/components/ValueContent";
import { WeChatProvider } from "@/components/WeChat";

const Index = () => {
  return (
    <WeChatProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <HeroSection />
        <TestimonialSwiper />
        <CoreCompetencies />
        <FacultyShowcase />
        <ValueContent />
      </div>
    </WeChatProvider>
  );
};

export default Index;
