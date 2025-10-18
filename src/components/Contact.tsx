import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section heading */}
          <div className="mb-16 text-center animate-slide-down">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4">
              <span className="text-accent">GET IN</span> TOUCH
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-accent to-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div className="space-y-8 animate-slide-up">
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or
                  opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:your.email@example.com"
                  className="flex items-center gap-4 text-lg hover:text-primary transition-colors group"
                >
                  <div className="p-3 bg-card border border-primary/20 group-hover:border-primary transition-colors">
                    <Mail className="h-6 w-6" />
                  </div>
                  <span className="font-mono">your.email@example.com</span>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:text-primary transition-colors group"
                >
                  <div className="p-3 bg-card border border-primary/20 group-hover:border-primary transition-colors">
                    <Github className="h-6 w-6" />
                  </div>
                  <span className="font-mono">github.com/nitinmaurya</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-lg hover:text-primary transition-colors group"
                >
                  <div className="p-3 bg-card border border-primary/20 group-hover:border-primary transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <span className="font-mono">linkedin.com/in/nitinmaurya</span>
                </a>
              </div>
            </div>

            {/* Contact form */}
            <form onSubmit={handleSubmit} className="space-y-6 animate-scale-in">
              <div>
                <label htmlFor="name" className="block text-sm font-bold mb-2 tracking-wider">
                  NAME
                </label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="bg-background border-2 border-primary/20 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold mb-2 tracking-wider">
                  EMAIL
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="bg-background border-2 border-primary/20 focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold mb-2 tracking-wider">
                  MESSAGE
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your message here..."
                  rows={6}
                  className="bg-background border-2 border-primary/20 focus:border-primary transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-6 text-lg font-bold bg-gradient-to-r from-primary to-accent text-background hover:scale-105 transition-all hover:shadow-[0_0_30px_hsl(var(--primary))]"
              >
                <Send className="h-5 w-5 mr-2" />
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
