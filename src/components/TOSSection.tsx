import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

interface TOSSectionProps {
  title: string;
  description: string;
  content: string[];
  icon?: React.ReactNode;
}

export function TOSSection({ title, description, content, icon }: TOSSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="shadow-card hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-primary/20 animate-fade-in">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-muted/30 transition-colors rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {icon && (
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {icon}
                  </div>
                )}
                <div className="text-left">
                  <CardTitle className="text-foreground font-semibold">{title}</CardTitle>
                  <CardDescription className="text-muted-foreground mt-1">
                    {description}
                  </CardDescription>
                </div>
              </div>
              {isOpen ? (
                <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform" />
              ) : (
                <ChevronRight className="h-5 w-5 text-muted-foreground transition-transform" />
              )}
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent className="pt-0 pb-6">
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              {content.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}