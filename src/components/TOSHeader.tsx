import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Share2 } from "lucide-react";

export function TOSHeader() {
  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      <div className="relative max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-slide-up">
          <FileText className="h-4 w-4" />
          Terms of Service Generator
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
          Professional Terms of Service
          <span className="block text-primary mt-2">Made Simple</span>
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Build comprehensive terms of service for your platform using proven legal frameworks. 
          Based on industry-leading templates from companies like Indeed.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-elegant transition-all">
            <Download className="h-5 w-5 mr-2" />
            Generate TOS
          </Button>
          <Button variant="outline" size="lg" className="hover:bg-muted/50 transition-colors">
            <Share2 className="h-5 w-5 mr-2" />
            Share Template
          </Button>
        </div>
        
        <div className="flex flex-wrap gap-2 justify-center mt-8 animate-fade-in">
          <Badge variant="secondary" className="bg-muted text-muted-foreground">
            GDPR Compliant
          </Badge>
          <Badge variant="secondary" className="bg-muted text-muted-foreground">
            Industry Standard
          </Badge>
          <Badge variant="secondary" className="bg-muted text-muted-foreground">
            Lawyer Reviewed
          </Badge>
        </div>
      </div>
    </div>
  );
}