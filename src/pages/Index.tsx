import { TOSHeader } from "@/components/TOSHeader";
import { TOSSection } from "@/components/TOSSection";
import { tosData } from "@/data/tosData";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <TOSHeader />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Essential TOS Sections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive terms of service framework covering all critical legal aspects 
            for modern platforms and marketplaces.
          </p>
        </div>
        
        <div className="space-y-6">
          {tosData.map((section, index) => (
            <TOSSection
              key={index}
              title={section.title}
              description={section.description}
              content={section.content}
              icon={<section.icon className="h-5 w-5" />}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-card border border-border/50 rounded-lg p-8 shadow-card">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Generate Your TOS?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Customize these sections for your specific platform needs. Export as PDF, 
              Word document, or integrate directly into your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all shadow-elegant">
                Start Customization
              </button>
              <button className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-muted/50 transition-colors text-foreground">
                Download Template
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
