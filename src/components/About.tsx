
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { Avatar, AvatarImage } from "./ui/avatar";

const About = () => {
  return (
    <section id="about" className="bg-secondary/30 py-16 md:py-24">
      <div className="section-container">
        <MotionWrapper>
          <h2 className="section-title mb-16">About Me</h2>
        </MotionWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <MotionWrapper delay={0.2} direction="right">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/80 to-violet-600 p-1">
              <div className="bg-white rounded-xl p-4 h-full">
                <img 
                  src="/lovable-uploads/2b816c02-adc4-4a9d-a5d4-b9a19d660867.png" 
                  alt="Vishnu Vardhan Gurram" 
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.4} direction="left">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Vishnu Vardhan Gurram</h3>
              
              <p className="text-lg leading-relaxed">
                A Computer Science student passionate about Cloud Computing, DevOps, and AI solutions. 
                Skilled in AWS, Python, Docker, Kubernetes, and developing scalable cloud applications.
              </p>
              
              <p className="text-lg leading-relaxed">
                Currently pursuing B.Tech at Lovely Professional University, I'm focused on building 
                innovative solutions that leverage cloud technologies and automation.
              </p>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default About;
