import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Award, Clock } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import { openBookingModal } from "@/components/WeChat";

const HeroSection = () => {
  const handleBookingClick = () => {
    openBookingModal();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Academic tutoring services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Excel in Your <span className="text-accent">Academic Journey</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Professional thesis tutoring for overseas students. Expert guidance for paper writing, 
            editing, proofreading, and personal statements from PhD-qualified tutors.
          </p>

          {/* Service Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="text-accent" size={32} />
              </div>
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-80">Students Helped</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="text-accent" size={32} />
              </div>
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm opacity-80">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <CheckCircle className="text-accent" size={32} />
              </div>
              <div className="text-2xl font-bold">PhD</div>
              <div className="text-sm opacity-80">Qualified Tutors</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Clock className="text-accent" size={32} />
              </div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm opacity-80">Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              variant="cta" 
              size="lg"
              onClick={handleBookingClick}
              className="text-lg px-8 py-4 h-auto"
            >
              Book Your Session Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-4 h-auto bg-background/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-background/20"
            >
              View Our Services
            </Button>
          </div>

          {/* Service Types */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-background/20 rounded-full backdrop-blur-sm">
              Paper Writing
            </span>
            <span className="px-4 py-2 bg-background/20 rounded-full backdrop-blur-sm">
              Paper Revision
            </span>
            <span className="px-4 py-2 bg-background/20 rounded-full backdrop-blur-sm">
              Paper Proofreading
            </span>
            <span className="px-4 py-2 bg-background/20 rounded-full backdrop-blur-sm">
              PS Writing
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;