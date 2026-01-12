import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import lImage from "@/src/assets/l.png";
import fImage from "@/src/assets/f.png";
const projects = [{
  title: "LA Forge",
  description: "A professional WordPress-based business website with custom UI, optimized performance, and responsive design.",
  technologies: ["WordPress", "HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  image: lImage,
  liveUrl: "https://laforge.com.pk/",
}, {
  title: "Fourteenstartravels",
  description: "A feature-rich e-commerce platform with product management, secure checkout, and optimized user experience.",
  technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "JavaScript"],
  image: fImage,
  liveUrl: "https://fourteenstartravels.ae/",
}];
const ProjectsSection = () => {
  return <section id="projects" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-4">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of websites I've built using modern development practices
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => <AnimatedSection key={project.title} animation={index % 2 === 0 ? "fade-right" : "fade-left"} delay={index * 150}>
              <div className="group bg-background rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">
                        {tech}
                      </span>)}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button size="sm" variant="gradient" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View Project
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>)}
        </div>
      </div>
    </section>;
};
export default ProjectsSection;