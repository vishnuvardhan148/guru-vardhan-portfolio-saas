
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import MotionWrapper from "./MotionWrapper";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Mental Health Chatbot",
      description: "Developed a mental health support chatbot using custom LLM & RAG technologies. The system was deployed on AWS with serverless architecture.",
      tags: ["Python", "AWS", "LLM", "RAG"],
      image: "mental-health-chatbot.jpg",
      link: "#",
      github: "#"
    },
    {
      title: "Real-Time Voice Translator",
      description: "Built a real-time voice translation system leveraging AWS services including Transcribe for speech-to-text, Translate for language translation, and Polly for text-to-speech.",
      tags: ["AWS Transcribe", "AWS Translate", "AWS Polly", "Python"],
      image: "voice-translator.jpg", 
      link: "#",
      github: "#"
    },
    {
      title: "Image Classification System",
      description: "Implemented an image classification system using Amazon Rekognition, S3 for storage, and Lambda functions for serverless processing.",
      tags: ["AWS Rekognition", "S3", "Lambda", "Serverless"],
      image: "image-classification.jpg",
      link: "#",
      github: "#"
    },
    {
      title: "Cloud Hosted Cafe Website",
      description: "Designed and developed a responsive website for a cafe with HTML/CSS, hosted on Amazon S3 with CloudFront distribution.",
      tags: ["HTML/CSS", "AWS S3", "CloudFront"],
      image: "cafe-website.jpg",
      link: "#",
      github: "#"
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
              className="card group hover:-translate-y-2 transition-transform"
            >
              <div className="h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/80 to-violet-600 flex items-center justify-center">
                  <h3 className="text-white font-bold text-xl px-4 text-center">{project.title}</h3>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <motion.a
                  href={project.link}
                  className="text-primary flex items-center hover:underline"
                  whileHover={{ x: 5 }}
                >
                  View Project <ArrowRight size={16} className="ml-1" />
                </motion.a>
                
                <motion.a
                  href={project.github}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  whileHover={{ y: -3 }}
                >
                  <Github size={20} />
                </motion.a>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
