import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Face Mask Detection using CNN",
    description: "Real-time mask detection system using OpenCV and TensorFlow",
    tech: ["Python", "TensorFlow", "OpenCV", "CNN"],
    gradient: "from-primary to-accent",
  },
  {
    title: "Task Manager Web App",
    description: "Full-stack MERN productivity tool with JWT authentication",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    gradient: "from-accent to-primary",
  },
];

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="mb-16 animate-slide-up">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
              <span className="text-primary">FEATURED</span> PROJECTS
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent" />
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative bg-card border-2 border-primary/20 overflow-hidden hover:border-primary transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary" />

                <div className="relative p-8 md:p-12 space-y-6">
                  {/* Project number */}
                  <div className="text-6xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    0{index + 1}
                  </div>

                  {/* Project title */}
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Project description */}
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-bold tracking-wider bg-background border border-primary/30 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary hover:text-background transition-all group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    VIEW DETAILS
                  </Button>
                </div>

                {/* Hover effect line */}
                <div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${project.gradient} transition-all duration-500 ${
                    hoveredIndex === index ? "w-full" : "w-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
