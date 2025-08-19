import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import TestimonialCard from "./TestimonialCard";

// Mock data - in real app this would come from backend
const testimonials = [
  {
    id: "1",
    title: "Paper Writing",
    introduction: "Received comprehensive support for my master's thesis on environmental economics. The tutor provided detailed research guidance, helped structure arguments coherently, and ensured all citations met academic standards. Final grade: A+",
    screenshot: "/api/placeholder/400/300",
    instructorRating: 5,
    instructorName: "Dr. Sarah Chen"
  },
  {
    id: "2", 
    title: "Paper Revision",
    introduction: "My research paper on international business needed major revisions. The tutor identified weak arguments, improved flow, and enhanced academic writing style. The feedback was constructive and detailed throughout the process.",
    screenshot: "/api/placeholder/400/300",
    instructorRating: 5,
    instructorName: "Prof. Michael Zhang"
  },
  {
    id: "3",
    title: "PS Writing", 
    introduction: "Needed help with personal statement for PhD application. The tutor helped craft a compelling narrative highlighting my research experience and academic goals. Successfully got into my dream program!",
    screenshot: "/api/placeholder/400/300",
    instructorRating: 5,
    instructorName: "Dr. Emily Liu"
  },
  {
    id: "4",
    title: "Paper Proofreading",
    introduction: "Final proofreading service for my dissertation was exceptional. Every grammar error, formatting issue, and citation problem was fixed. The attention to detail was remarkable and professional.",
    screenshot: "/api/placeholder/400/300", 
    instructorRating: 5,
    instructorName: "Dr. James Wang"
  }
];

const TestimonialSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleTestimonialClick = (id: string) => {
    // Navigate to testimonial detail page
    console.log(`Navigate to testimonial ${id}`);
  };

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real feedback from students who achieved academic success with our tutoring services
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ChevronLeft size={20} />
          </Button>
          
          <Button
            variant="outline"
            size="icon" 
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={nextSlide}
          >
            <ChevronRight size={20} />
          </Button>

          {/* Testimonial Cards */}
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-8">
                  <TestimonialCard
                    {...testimonial}
                    onClick={() => handleTestimonialClick(testimonial.id)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSwiper;