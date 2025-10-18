import { Button } from "@/components/ui/button";
import { Download, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Nitin_Maurya_Resume.pdf';
    link.click();
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] animate-float" style={{ animationDelay: '1s' }} />
      </div>

      {/* Floating ML elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Binary code floating */}
        <div 
          className="absolute top-20 left-10 text-primary/20 text-2xl font-mono animate-float transition-transform duration-500" 
          style={{ 
            animationDuration: '6s',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        >
          01101101
        </div>
        <div 
          className="absolute top-40 right-20 text-matrix-green/20 text-xl font-mono animate-float transition-transform duration-500" 
          style={{ 
            animationDuration: '7s', 
            animationDelay: '1s',
            transform: `translate(${-mousePosition.x * 0.3}px, ${mousePosition.y * 0.4}px)`
          }}
        >
          11000101
        </div>
        <div 
          className="absolute bottom-32 left-1/4 text-primary/15 text-3xl font-mono animate-float transition-transform duration-500" 
          style={{ 
            animationDuration: '8s', 
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * 0.6}px, ${-mousePosition.y * 0.3}px)`
          }}
        >
          10011010
        </div>
        
        {/* Neural network nodes */}
        <div 
          className="absolute top-1/3 right-1/4 transition-transform duration-700"
          style={{
            transform: `translate(${mousePosition.x * 0.8}px, ${mousePosition.y * 0.8}px)`
          }}
        >
          <div className="relative">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <div className="absolute top-10 left-10 w-2 h-2 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute -top-8 left-12 w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-0 left-0 w-px h-12 bg-primary/30 rotate-45" />
            <div className="absolute top-0 left-0 w-px h-10 bg-secondary/30 -rotate-45" />
          </div>
        </div>

        {/* Data symbols - parallax effect */}
        <div 
          className="absolute bottom-1/4 right-10 text-accent/20 text-4xl animate-float transition-transform duration-500" 
          style={{ 
            animationDuration: '9s',
            transform: `translate(${-mousePosition.x * 0.7}px, ${-mousePosition.y * 0.5}px)`
          }}
        >
          λ
        </div>
        <div 
          className="absolute top-1/4 left-1/3 text-secondary/20 text-5xl animate-float transition-transform duration-500" 
          style={{ 
            animationDuration: '10s', 
            animationDelay: '1.5s',
            transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.6}px)`
          }}
        >
          Σ
        </div>
        <div 
          className="absolute bottom-20 left-20 text-primary/20 text-3xl animate-float transition-transform duration-500" 
          style={{ 
            animationDuration: '7s', 
            animationDelay: '0.5s',
            transform: `translate(${-mousePosition.x * 0.5}px, ${mousePosition.y * 0.4}px)`
          }}
        >
          ∫
        </div>
        
        {/* Matrix brackets */}
        <div 
          className="absolute top-1/2 right-1/3 text-matrix-green/15 text-6xl font-bold animate-float transition-transform duration-700" 
          style={{ 
            animationDuration: '11s',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        >
          [ ]
        </div>

        {/* Additional ML themed elements */}
        <div 
          className="absolute top-3/4 left-1/2 text-data-purple/20 text-2xl font-mono animate-float transition-transform duration-500"
          style={{
            animationDuration: '8s',
            animationDelay: '1s',
            transform: `translate(${-mousePosition.x * 0.6}px, ${-mousePosition.y * 0.7}px)`
          }}
        >
          {'</>'}
        </div>
        <div 
          className="absolute top-1/2 left-10 text-jupyter-orange/20 text-4xl animate-float transition-transform duration-500"
          style={{
            animationDuration: '9s',
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`
          }}
        >
          π
        </div>
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-24">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter">
            <span className="block text-primary animate-glow-pulse">NITIN</span>
            <span className="block text-foreground">MAURYA</span>
          </h1>

          {/* Subtitle */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground/90">
              Aspiring Data Scientist & Machine Learning Engineer
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground tracking-widest">
              TURNING DATA INTO DECISIONS
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
            <Button
              onClick={handleDownloadResume}
              size="lg"
              className="group relative px-8 py-6 text-lg font-bold bg-gradient-to-r from-primary to-accent text-background overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary))]"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download className="h-5 w-5" />
                DOWNLOAD RESUME
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>

            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg font-bold border-2 border-primary text-primary hover:bg-primary hover:text-background transition-all hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              CONTACT
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2 mx-auto">
              <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
