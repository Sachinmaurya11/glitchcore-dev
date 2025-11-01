import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Calendar, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const certifications = [
  {
    title: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-ML-2024-001",
    skills: ["Machine Learning", "AWS SageMaker", "Deep Learning", "Model Deployment"],
    verifyUrl: "#",
  },
  {
    title: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2023",
    credentialId: "TF-DEV-2023-789",
    skills: ["TensorFlow", "Neural Networks", "Computer Vision", "NLP"],
    verifyUrl: "#",
  },
  {
    title: "AI Hackathon Winner",
    issuer: "TechCon 2024",
    date: "2024",
    skills: ["Team Collaboration", "AI Development", "Innovation", "Problem Solving"],
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
  },
  {
    title: "Data Science Volunteer Program",
    issuer: "DataForGood Initiative",
    date: "2023",
    skills: ["Community Service", "Data Analysis", "Social Impact", "Teaching"],
    imageUrl: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&q=80",
  },
  {
    title: "Professional Data Scientist",
    issuer: "DataCamp",
    date: "2023",
    credentialId: "DC-PDS-2023-456",
    skills: ["Python", "Statistics", "Data Analysis", "Visualization"],
    verifyUrl: "#",
  },
  {
    title: "Machine Learning Bootcamp Completion",
    issuer: "ML Academy",
    date: "2023",
    skills: ["ML Algorithms", "Model Building", "Feature Engineering", "Python"],
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
  },
];

export const Certifications = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold tracking-wider text-primary">CREDENTIALS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications validating expertise in data science, machine learning, and AI technologies
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)] bg-card/50 backdrop-blur-sm"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <CardContent className="p-6 relative z-10">
                {/* Certificate Icon */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Certificate Details */}
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 font-medium">
                  {cert.issuer}
                </p>

                {/* Credential ID - Only show if available */}
                {cert.credentialId && (
                  <div className="mb-4 p-2 rounded bg-muted/50 border border-border">
                    <p className="text-xs text-muted-foreground">Credential ID</p>
                    <p className="text-xs font-mono font-bold">{cert.credentialId}</p>
                  </div>
                )}

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Action Button - Show image dialog or verify link */}
                {cert.imageUrl ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
                      >
                        View Certificate
                        <Image className="w-3 h-3 ml-2" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle>{cert.title}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <img
                          src={cert.imageUrl}
                          alt={`${cert.title} certificate`}
                          className="w-full h-auto rounded-lg border border-border"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors"
                    asChild
                  >
                    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                      Verify Certificate
                      <ExternalLink className="w-3 h-3 ml-2" />
                    </a>
                  </Button>
                )}
              </CardContent>

              {/* Bottom Progress Bar */}
              <div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-accent transition-all duration-500 ${
                  hoveredIndex === index ? "w-full" : "w-0"
                }`}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
