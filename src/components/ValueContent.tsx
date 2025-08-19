import { Card } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";

// Mock data - in real app this would come from backend
const articles = [
  {
    id: "1",
    title: "Essential Tips for Writing Outstanding Research Papers",
    thumbnail: "/api/placeholder/300/200",
    publishDate: "2024-01-15",
    excerpt: "Learn the fundamental techniques that top students use to craft compelling research papers that impress professors..."
  },
  {
    id: "2", 
    title: "How to Structure Your Master's Thesis for Maximum Impact",
    thumbnail: "/api/placeholder/300/200", 
    publishDate: "2024-01-12",
    excerpt: "Discover the proven framework for organizing your thesis that leads to higher grades and academic recognition..."
  },
  {
    id: "3",
    title: "Personal Statement Writing: Common Mistakes to Avoid",
    thumbnail: "/api/placeholder/300/200",
    publishDate: "2024-01-10", 
    excerpt: "Avoid these critical errors that can derail your graduate school applications and learn what admissions committees really want..."
  },
  {
    id: "4",
    title: "Citation and Referencing: A Complete Academic Guide",
    thumbnail: "/api/placeholder/300/200",
    publishDate: "2024-01-08",
    excerpt: "Master the art of proper citation across different academic styles including APA, MLA, Chicago, and Harvard formats..."
  },
  {
    id: "5",
    title: "Time Management Strategies for Academic Writing Success", 
    thumbnail: "/api/placeholder/300/200",
    publishDate: "2024-01-05",
    excerpt: "Proven techniques to manage your writing projects efficiently and meet tight academic deadlines without stress..."
  },
  {
    id: "6",
    title: "Research Methodology: Choosing the Right Approach",
    thumbnail: "/api/placeholder/300/200", 
    publishDate: "2024-01-03",
    excerpt: "Understanding qualitative vs quantitative research methods and selecting the best approach for your academic project..."
  }
];

const ValueContent = () => {
  const handleArticleClick = (articleId: string) => {
    // Navigate to article detail page
    console.log(`Navigate to article ${articleId}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="articles" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Valuable Academic Insights
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Expert tips, guides, and resources to help you excel in your academic journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card 
              key={article.id}
              className="overflow-hidden cursor-pointer hover:shadow-card transition-all duration-300 bg-gradient-card border-border/50 group"
              onClick={() => handleArticleClick(article.id)}
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.thumbnail}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-primary text-primary-foreground rounded-full p-2">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Publication Date */}
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {formatDate(article.publishDate)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Read More Indicator */}
                <div className="mt-4 flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Read more</span>
                  <ArrowRight size={16} className="ml-1" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary-dark font-medium transition-colors">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueContent;