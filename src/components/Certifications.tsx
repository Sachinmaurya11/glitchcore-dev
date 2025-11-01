import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    title: "Professional Data Scientist",
    issuer: "DataCamp",
    date: "2023",
    credentialId: "DC-PDS-2023-456",
    skills: ["Python", "Statistics", "Data Analysis", "Visualization"],
    verifyUrl: "#",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera - DeepLearning.AI",
    date: "2023",
    credentialId: "DL-SPEC-2023-321",
    skills: ["Deep Learning", "CNN", "RNN", "PyTorch"],
    verifyUrl: "#",
  },
  {
    title: "Microsoft Certified: Azure Data Scientist Associate",
    issuer: "Microsoft",
    date: "2022",
    credentialId: "MS-AZ-2022-654",
    skills: ["Azure ML", "MLOps", "Model Training", "Deployment"],
    verifyUrl: "#",
  },
  {
    title: "Data Science Professional Certificate",
    issuer: "IBM",
    date: "2022",
    credentialId: "IBM-DS-2022-987",
    skills: ["Data Science", "Python", "SQL", "Machine Learning"],
    verifyUrl: "#",
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

                {/* Credential ID */}
                <div className="mb-4 p-2 rounded bg-muted/50 border border-border">
                  <p className="text-xs text-muted-foreground">Credential ID</p>
                  <p className="text-xs font-mono font-bold">{cert.credentialId}</p>
                </div>

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

                {/* Verify Button */}
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
