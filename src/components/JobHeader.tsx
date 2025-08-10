import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Filter, Bell } from "lucide-react";

export function JobHeader() {
  return (
    <div className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
      
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            Find Your Dream Job
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-slide-up">
            Discover opportunities from top companies and take the next step in your career
          </p>
        </div>
        
        {/* Search Form */}
        <div className="max-w-4xl mx-auto animate-slide-up">
          <div className="bg-white rounded-lg shadow-elegant p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="Job title, keywords, or company" 
                  className="pl-10 h-12 text-lg border-border focus:ring-primary"
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  placeholder="City, state, or remote" 
                  className="pl-10 h-12 text-lg border-border focus:ring-primary"
                />
              </div>
              <Button size="lg" className="h-12 bg-primary hover:bg-primary/90 text-white font-semibold">
                <Search className="h-5 w-5 mr-2" />
                Find Jobs
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center pt-2">
              <Badge variant="secondary" className="hover:bg-secondary/80 cursor-pointer">
                Remote
              </Badge>
              <Badge variant="secondary" className="hover:bg-secondary/80 cursor-pointer">
                Full-time
              </Badge>
              <Badge variant="secondary" className="hover:bg-secondary/80 cursor-pointer">
                Part-time
              </Badge>
              <Badge variant="secondary" className="hover:bg-secondary/80 cursor-pointer">
                Entry Level
              </Badge>
              <Badge variant="secondary" className="hover:bg-secondary/80 cursor-pointer">
                Senior Level
              </Badge>
            </div>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto animate-fade-in">
          <div className="text-center text-white">
            <div className="text-3xl font-bold">50,000+</div>
            <div className="text-white/80">Active Jobs</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold">10,000+</div>
            <div className="text-white/80">Companies</div>
          </div>
          <div className="text-center text-white">
            <div className="text-3xl font-bold">1M+</div>
            <div className="text-white/80">Job Seekers</div>
          </div>
        </div>
      </div>
    </div>
  );
}