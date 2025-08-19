import { Card } from "@/components/ui/card";
import { 
  Clock, 
  Users, 
  Shield, 
  RefreshCw, 
  TrendingUp, 
  CheckCircle 
} from "lucide-react";

const competencies = [
  {
    icon: Clock,
    title: "24-Hour Online Support",
    description: "Round-the-clock assistance for all your academic needs, no matter your timezone"
  },
  {
    icon: Users,
    title: "Professional and Reliable Faculty Team", 
    description: "PhD-qualified tutors from top universities with proven academic track records"
  },
  {
    icon: Shield,
    title: "Trustworthy Privacy Protection",
    description: "Complete confidentiality and secure handling of all your academic materials"
  },
  {
    icon: RefreshCw,
    title: "Unlimited Revisions and Double Quality Control",
    description: "Multiple rounds of review and editing until you're completely satisfied"
  },
  {
    icon: TrendingUp,
    title: "Regular Updates and Factual Evidence",
    description: "Current research methods and up-to-date academic sources for all projects"
  },
  {
    icon: CheckCircle,
    title: "After-sales Guarantee: Full Refund if Fail",
    description: "100% money-back guarantee if you don't achieve your academic goals"
  }
];

const CoreCompetencies = () => {
  return (
    <section id="services" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose A+ Essay?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide comprehensive academic support with industry-leading standards and guarantees
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competencies.map((competency, index) => {
            const Icon = competency.icon;
            return (
              <Card 
                key={index}
                className="p-6 text-center hover:shadow-card transition-all duration-300 bg-gradient-card border-border/50 group"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {competency.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {competency.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreCompetencies;