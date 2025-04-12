
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { 
  Cloud, Database, Server, Code, 
  Network, Bot, 
  FileCode, Laptop, Terminal, 
  Workflow, PenTool
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Computing",
      skills: [
        { name: "AWS", icon: <Cloud className="h-8 w-8 text-primary" /> },
        { name: "Azure", icon: <Cloud className="h-8 w-8 text-blue-500" /> },
        { name: "GCP", icon: <Cloud className="h-8 w-8 text-yellow-500" /> },
        { name: "Serverless", icon: <Server className="h-8 w-8 text-violet-500" /> }
      ]
    },
    {
      title: "DevOps",
      skills: [
        { name: "Docker", icon: <Network className="h-8 w-8 text-blue-600" /> },
        { name: "Kubernetes", icon: <Network className="h-8 w-8 text-blue-400" /> },
        { name: "CI/CD", icon: <Workflow className="h-8 w-8 text-green-500" /> },
        { name: "Terraform", icon: <PenTool className="h-8 w-8 text-purple-600" /> }
      ]
    },
    {
      title: "Programming",
      skills: [
        { name: "Python", icon: <Code className="h-8 w-8 text-yellow-600" /> },
        { name: "JavaScript", icon: <FileCode className="h-8 w-8 text-yellow-400" /> },
        { name: "Node.js", icon: <Terminal className="h-8 w-8 text-green-600" /> },
        { name: "React", icon: <Laptop className="h-8 w-8 text-blue-500" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-gradient-to-b from-white to-secondary/20">
      <div className="section-container">
        <MotionWrapper>
          <h2 className="section-title mb-16">Skills</h2>
        </MotionWrapper>

        <div className="space-y-16">
          {skillCategories.map((category, idx) => (
            <div key={category.title} className="mb-12">
              <MotionWrapper delay={idx * 0.2}>
                <h3 className="text-2xl font-bold text-center mb-8 text-primary/90">{category.title}</h3>
              </MotionWrapper>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                {category.skills.map((skill, index) => (
                  <MotionWrapper 
                    key={skill.name}
                    delay={idx * 0.1 + index * 0.1}
                  >
                    <div className="bg-white rounded-xl shadow-lg border border-primary/5 p-6 flex flex-col items-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                      <div className="bg-primary/5 p-4 rounded-full mb-4">
                        {skill.icon}
                      </div>
                      <h4 className="font-medium">{skill.name}</h4>
                    </div>
                  </MotionWrapper>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
