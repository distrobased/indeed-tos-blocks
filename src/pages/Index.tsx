import { Navbar } from "@/components/Navbar";
import { JobHeader } from "@/components/JobHeader";
import { JobCard } from "@/components/JobCard";
import { JobFilters } from "@/components/JobFilters";
import { jobsData } from "@/data/jobsData";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SlidersHorizontal, Grid3X3, List } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      <JobHeader />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Results Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Featured Jobs
            </h2>
            <p className="text-muted-foreground">
              {jobsData.length} jobs found • Updated daily
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <Select defaultValue="relevant">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevant">Most Relevant</SelectItem>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="salary">Highest Salary</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="flex items-center border border-border rounded-lg">
              <Button variant="ghost" size="sm" className="rounded-r-none">
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-l-none border-l">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <JobFilters />
            </div>
          </div>
          
          {/* Job Listings */}
          <div className="lg:col-span-3">
            <div className="grid gap-6">
              {jobsData.map((job) => (
                <JobCard key={job.id} {...job} />
              ))}
            </div>
            
            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="px-8">
                Load More Jobs
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Showing 8 of 50,000+ jobs
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 bg-card border border-border/50 rounded-lg p-8 text-center shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Get Job Alerts
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Never miss out on your dream job. Get personalized job recommendations 
            delivered to your inbox.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Set Up Job Alerts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
