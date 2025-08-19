import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, GraduationCap, Award } from "lucide-react";
import tutorImage1 from "@/assets/tutor-1.jpg";
import tutorImage2 from "@/assets/tutor-2.jpg";
import { openBookingModal } from "@/components/WeChat";

const faculty = [
  {
    id: "1",
    photo: tutorImage1,
    name: "Dr. Sarah Chen",
    rating: 5,
    education: "PhD from Stanford University, MSc from Columbia University",
    highlights: "Several professional research papers published in PHYSICS REPORTS—REVIEW SECTION OF PHYSICS LETTERS. Specializes in advanced physics and engineering dissertations.",
    specialties: ["Physics", "Engineering", "Research Methodology"]
  },
  {
    id: "2", 
    photo: tutorImage2,
    name: "Prof. Michael Zhang",
    rating: 5,
    education: "PhD from Harvard University, MSc from National University of Singapore",
    highlights: "Professional articles published in Journal of Management Information Systems and Decision Sciences. Expert in business and economics research.",
    specialties: ["Business", "Economics", "Management"]
  },
  {
    id: "3",
    photo: tutorImage1,
    name: "Dr. Emily Liu", 
    rating: 5,
    education: "PhD from MIT, MSc from Oxford University",
    highlights: "Winner of China's Huang Da-Mundell Economics Prize. Extensive experience in economic theory refinement and innovation research.",
    specialties: ["Economics", "Finance", "Statistics"]
  }
];

const FacultyShowcase = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-accent text-accent" : "text-muted-foreground"}
      />
    ));
  };

  const handleBookingClick = () => {
    openBookingModal();
  };

  return (
    <section id="tutors" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Expert Faculty
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn from PhD-qualified tutors from world's top universities with proven academic excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((tutor) => (
            <Card 
              key={tutor.id}
              className="overflow-hidden hover:shadow-card transition-all duration-300 bg-gradient-card border-border/50"
            >
              {/* Profile Photo */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tutor.photo}
                  alt={tutor.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-full p-2">
                  <GraduationCap size={20} className="text-primary" />
                </div>
              </div>

              <div className="p-6">
                {/* Name and Rating */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {tutor.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      {renderStars(tutor.rating)}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({tutor.rating}.0)
                    </span>
                  </div>
                </div>

                {/* Education Background */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <GraduationCap size={16} className="text-primary" />
                    <span className="text-sm font-medium text-foreground">Education</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tutor.education}
                  </p>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {tutor.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-primary-light text-primary text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award size={16} className="text-accent" />
                    <span className="text-sm font-medium text-foreground">Highlights</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {tutor.highlights}
                  </p>
                </div>

                {/* Book Now Button */}
                <Button 
                  variant="cta" 
                  className="w-full"
                  onClick={handleBookingClick}
                >
                  Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultyShowcase;