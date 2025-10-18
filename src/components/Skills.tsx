const skills = [
  "Machine Learning",
  "Data Science",
  "Python",
  "TensorFlow",
  "OpenCV",
  "JavaScript",
  "React",
  "MongoDB",
  "MERN Stack",
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-card/30">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="mb-16 text-center animate-slide-down">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
              <span className="text-accent">TECH</span> STACK
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-accent to-primary mx-auto" />
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className="group relative p-6 md:p-8 bg-background border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-primary" />
                <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-primary" />
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-primary" />

                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Skill text */}
                <div className="relative text-center font-bold text-sm md:text-base tracking-wider">
                  {skill}
                </div>
              </div>
            ))}
          </div>

          {/* Additional info */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground text-lg">
              And always learning more...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
