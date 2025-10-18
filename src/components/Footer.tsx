export const Footer = () => {
  return (
    <footer className="py-12 border-t border-primary/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-muted-foreground font-mono">
            © 2025 <span className="text-primary font-bold">Nitin Maurya</span> • All Rights Reserved
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <span className="text-accent animate-glow-pulse">▲</span>
            <span>React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
