import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { openBookingModal } from "@/components/WeChat";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A+</span>
            </div>
            <span className="text-xl font-bold text-foreground">Essay</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#tutors" className="text-muted-foreground hover:text-primary transition-colors">
              Our Tutors
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
            <a href="#articles" className="text-muted-foreground hover:text-primary transition-colors">
              Articles
            </a>
            <Button variant="cta" size="sm" onClick={openBookingModal}>
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#tutors" className="text-muted-foreground hover:text-primary transition-colors">
                Our Tutors
              </a>
              <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="#articles" className="text-muted-foreground hover:text-primary transition-colors">
                Articles
              </a>
              <Button variant="cta" size="sm" className="w-full" onClick={openBookingModal}>
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;