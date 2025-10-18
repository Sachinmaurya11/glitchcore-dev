export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <div className="mb-16 animate-slide-up">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
              <span className="text-primary">ABOUT</span> ME
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent" />
          </div>

          {/* Content */}
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-foreground/90 animate-fade-in">
            <p>
              I'm a <span className="text-primary font-bold">BCA student</span> at{" "}
              <span className="text-primary font-bold">Maharaja Surajmal Institute</span>{" "}
              (2023–2026), deeply passionate about{" "}
              <span className="text-accent font-bold">artificial intelligence</span>,{" "}
              <span className="text-accent font-bold">data science</span>, and scalable web
              technologies.
            </p>
            
            <p>
              I enjoy building intelligent systems that solve real problems using{" "}
              <span className="text-primary font-bold">Python</span>,{" "}
              <span className="text-primary font-bold">Machine Learning</span>,{" "}
              <span className="text-primary font-bold">React</span>, and{" "}
              <span className="text-primary font-bold">MongoDB</span>.
            </p>

            <p>
              My academic foundation includes{" "}
              <span className="text-accent font-bold">72% in 10th CBSE</span> and{" "}
              <span className="text-accent font-bold">77% in 12th CBSE</span>, and I'm
              constantly exploring new ways to combine AI with full-stack development.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
              <div className="text-center space-y-2 p-6 bg-card border border-primary/20 hover:border-primary/50 transition-colors">
                <div className="text-4xl font-bold text-primary">2023</div>
                <div className="text-sm text-muted-foreground">STARTED BCA</div>
              </div>
              <div className="text-center space-y-2 p-6 bg-card border border-primary/20 hover:border-primary/50 transition-colors">
                <div className="text-4xl font-bold text-accent">10+</div>
                <div className="text-sm text-muted-foreground">TECHNOLOGIES</div>
              </div>
              <div className="text-center space-y-2 p-6 bg-card border border-primary/20 hover:border-primary/50 transition-colors">
                <div className="text-4xl font-bold text-primary">2+</div>
                <div className="text-sm text-muted-foreground">PROJECTS</div>
              </div>
              <div className="text-center space-y-2 p-6 bg-card border border-primary/20 hover:border-primary/50 transition-colors">
                <div className="text-4xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">DEDICATION</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
