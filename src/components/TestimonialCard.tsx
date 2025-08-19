import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MessageSquare } from "lucide-react";
import { useState } from "react";

interface TestimonialCardProps {
  id: string;
  title: string;
  introduction: string;
  screenshot: string;
  instructorRating: number;
  instructorName: string;
  onClick?: () => void;
}

const TestimonialCard = ({
  title,
  introduction,
  screenshot,
  instructorRating,
  instructorName,
  onClick
}: TestimonialCardProps) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const handleCardClick = () => {
    if (onClick) onClick();
  };

  const handleImageClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsImageModalOpen(true);
  };

  const handleImageModalClose = () => {
    setIsImageModalOpen(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? "fill-accent text-accent" : "text-muted-foreground"}
      />
    ));
  };

  return (
    <>
      <Card 
        className="p-6 cursor-pointer hover:shadow-card transition-all duration-300 bg-gradient-card border-border/50"
        onClick={handleCardClick}
      >
        <div className="space-y-4">
          {/* Service Type Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-light text-primary text-sm font-medium">
            {title}
          </div>

          {/* Introduction */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {introduction}
          </p>

          {/* Screenshot */}
          <div className="relative">
            <img
              src={screenshot}
              alt="Customer feedback screenshot"
              className="w-full h-48 object-cover rounded-lg border border-border cursor-pointer hover:opacity-90 transition-opacity"
              onClick={handleImageClick}
            />
            <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm rounded-full p-2">
              <MessageSquare size={16} className="text-primary" />
            </div>
          </div>

          {/* Instructor Info */}
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {renderStars(instructorRating)}
              </div>
              <span className="text-sm text-muted-foreground">
                by {instructorName}
              </span>
            </div>
          </div>
        </div>
      </Card>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleImageModalClose}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={screenshot}
              alt="Customer feedback screenshot"
              className="max-w-full max-h-full object-contain rounded-lg shadow-elevated"
            />
            <Button
              variant="outline"
              size="sm"
              className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm"
              onClick={handleImageModalClose}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialCard;