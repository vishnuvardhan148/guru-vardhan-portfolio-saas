
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<null | {
    title: string;
    description: string;
    tags: string[];
    image: string;
    link: string;
    github: string;
    fullDescription?: string;
    features?: string[];
    technologies?: string[];
  }>(null);

  const projects = [
    {
      title: "AI-Powered Mental Health Chatbot",
      description: "Developed a mental health support chatbot using custom LLM & RAG technologies. The system was deployed on AWS with serverless architecture.",
      tags: ["Python", "AWS", "LLM", "RAG"],
      image: "/lovable-uploads/Mental-health-chatbot.jpg",
      link: "#",
      github: "#",
      fullDescription: "A comprehensive mental health support system utilizing advanced language models to provide empathetic responses and guidance to users in need. The system leverages RAG (Retrieval Augmented Generation) to provide accurate, contextual information.",
      features: [
        "24/7 anonymous mental health support",
        "Integration with crisis resources",
        "Personalized conversation history",
        "Multi-language support"
      ],
      technologies: [
        "Amazon Bedrock for LLM integration",
        "AWS Lambda for serverless processing",
        "DynamoDB for conversation storage",
        "Amazon CloudFront for global distribution"
      ]
    },
    {
      title: "Real-Time Voice Translator",
      description: "Built a real-time voice translation system leveraging AWS services including Transcribe for speech-to-text, Translate for language translation, and Polly for text-to-speech.",
      tags: ["AWS Transcribe", "AWS Translate", "AWS Polly", "Python"],
      image: "/lovable-uploads/voice-translator.jpg",
      link: "#",
      github: "https://github.com/vishnuvardhan148/nephele",
      fullDescription: "A real-time voice translation solution that enables seamless communication across language barriers. The system captures speech, performs real-time translation, and delivers natural-sounding output in the target language.",
      features: [
        "Support for 30+ languages",
        "Real-time processing with minimal latency",
        "Custom vocabulary for domain-specific terms",
        "Mobile and web interfaces"
      ],
      technologies: [
        "AWS Transcribe for accurate speech recognition",
        "AWS Translate for neural machine translation",
        "AWS Polly for natural text-to-speech synthesis",
        "WebSockets for real-time communication"
      ]
    },
    {
      title: "Image Classification System",
      description: "Implemented an image classification system using Amazon Rekognition, S3 for storage, and Lambda functions for serverless processing.",
      tags: ["AWS Rekognition", "S3", "Lambda", "Serverless"],
      image: "/lovable-uploads/image-classification.jpg",
      link: "#",
      github: "https://github.com/vishnuvardhan148/image-labels-generator",
      fullDescription: "A scalable image classification platform that can identify objects, scenes, and activities in images with high accuracy. The system is built on serverless architecture for cost-efficiency and automatic scaling.",
      features: [
        "Object and scene detection",
        "Content moderation capabilities",
        "Custom label training",
        "Batch processing support"
      ],
      technologies: [
        "Amazon Rekognition for image analysis",
        "AWS S3 for scalable storage",
        "Lambda functions for event-driven processing",
        "Step Functions for workflow orchestration"
      ]
    },
    {
      title: "Cloud Hosted Cafe Website",
      description: "Designed and developed a responsive website for a cafe with HTML/CSS, hosted on Amazon S3 with CloudFront distribution.",
      tags: ["HTML/CSS", "AWS S3", "CloudFront"],
      image: "/lovable-uploads/cafe-website.jpg",
      link: "#",
      github: "https://github.com/vishnuvardhan148/my-static-website",
      fullDescription: "A modern, responsive website for a local cafe that showcases their menu, location, and online ordering capabilities. The site is optimized for performance and hosted entirely on AWS infrastructure.",
      features: [
        "Online menu with filtering options",
        "Table reservation system",
        "Customer testimonials section",
        "Integrated Google Maps"
      ],
      technologies: [
        "HTML5/CSS3 for responsive design",
        "S3 for static website hosting",
        "CloudFront for global content delivery",
        "Route 53 for domain management"
      ]
    }
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/30">
      <div className="section-container">
        <MotionWrapper>
          <h2 className="section-title mb-16">Projects</h2>
        </MotionWrapper>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <MotionWrapper 
              key={project.title}
              delay={index * 0.1}
            >
              <div 
                className="card group hover:-translate-y-2 transition-transform cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-48 bg-gradient-to-br from-primary/80 to-violet-600 rounded-lg mb-4 overflow-hidden flex items-center justify-center relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      console.error(`Failed to load image: ${project.image}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <h3 className="text-white font-bold text-xl px-4 text-center relative z-10">{project.title}</h3>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <motion.span
                    className="text-primary flex items-center hover:underline"
                    whileHover={{ x: 5 }}
                  >
                    View Details <ArrowRight size={16} className="ml-1" />
                  </motion.span>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl text-primary">{selectedProject?.title}</DialogTitle>
            <DialogDescription className="text-foreground/80 text-base mt-2">
              {selectedProject?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="py-4 space-y-4">
            <div className="bg-gradient-to-br from-primary/80 to-violet-600 h-40 rounded-lg flex items-center justify-center relative">
              <img 
                src={selectedProject?.image} 
                alt={selectedProject?.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${selectedProject?.image}`);
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <h3 className="text-white font-bold text-xl px-4 text-center relative z-10">{selectedProject?.title}</h3>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2">About</h4>
              <p className="text-muted-foreground">{selectedProject?.fullDescription}</p>
            </div>
            
            {selectedProject?.features && (
              <div>
                <h4 className="font-semibold text-lg mb-2">Key Features</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="text-muted-foreground">{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {selectedProject?.technologies && (
              <div>
                <h4 className="font-semibold text-lg mb-2">Technologies Used</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {selectedProject.technologies.map((tech, i) => (
                    <li key={i} className="text-muted-foreground">{tech}</li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject?.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
            
            <div className="flex gap-4 pt-2">
              <a 
                href={selectedProject?.link} 
                target="_blank"
                rel="noreferrer"
                className="btn-primary inline-flex items-center"
              >
                Visit Site <ExternalLink size={16} className="ml-2" />
              </a>
              <a 
                href={selectedProject?.github} 
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 inline-flex items-center"
              >
                View Code <Github size={16} className="ml-2" />
              </a>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
