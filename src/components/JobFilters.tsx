import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

export function JobFilters() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Job Type */}
        <div>
          <Label className="text-sm font-semibold text-foreground mb-3 block">Job Type</Label>
          <div className="space-y-3">
            {["Full-time", "Part-time", "Contract", "Internship", "Remote"].map((type) => (
              <div key={type} className="flex items-center space-x-2">
                <Checkbox id={type} />
                <Label htmlFor={type} className="text-sm text-muted-foreground cursor-pointer">
                  {type}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Experience Level */}
        <div>
          <Label className="text-sm font-semibold text-foreground mb-3 block">Experience Level</Label>
          <div className="space-y-3">
            {["Entry Level", "Mid Level", "Senior Level", "Executive"].map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <Checkbox id={level} />
                <Label htmlFor={level} className="text-sm text-muted-foreground cursor-pointer">
                  {level}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Salary Range */}
        <div>
          <Label className="text-sm font-semibold text-foreground mb-3 block">
            Salary Range
          </Label>
          <div className="px-2">
            <Slider
              defaultValue={[50]}
              max={200}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              <span>$30k</span>
              <span>$200k+</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Popular Companies */}
        <div>
          <Label className="text-sm font-semibold text-foreground mb-3 block">Popular Companies</Label>
          <div className="space-y-3">
            {["Google", "Microsoft", "Apple", "Amazon", "Meta"].map((company) => (
              <div key={company} className="flex items-center space-x-2">
                <Checkbox id={company} />
                <Label htmlFor={company} className="text-sm text-muted-foreground cursor-pointer">
                  {company}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Skills */}
        <div>
          <Label className="text-sm font-semibold text-foreground mb-3 block">Top Skills</Label>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "React", "Python", "Node.js", "SQL", "AWS", "Docker", "TypeScript"].map((skill) => (
              <Badge 
                key={skill} 
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-white transition-colors text-xs"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}