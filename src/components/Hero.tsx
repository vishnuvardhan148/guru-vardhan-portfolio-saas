
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Enhanced Background elements */}
      <div className="absolute inset-0 z-0 subtle-gradient">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl"></div>
        
        {/* Animated floating elements */}
        <motion.div
          className="absolute top-20 left-[20%] w-6 h-6 rounded-full bg-primary/30"
          animate={{
            y: [0, -15, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-[20%] w-4 h-4 rounded-full bg-violet-500/30"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            className="mb-8 inline-block p-2 px-4 rounded-full bg-primary/10 text-primary font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm">Hi there 👋 I'm</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="gradient-text">Vishnu Vardhan Gurram</span>
          </motion.h1>
          
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-primary to-violet-500 mx-auto mb-8 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Cloud Computing & DevOps Enthusiast
          </motion.p>
          
          <motion.p 
            className="text-lg mb-8 mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Computer Science student passionate about building scalable cloud applications, 
            AI solutions, and exploring DevOps technologies.
          </motion.p>

          {/* Social links - updated with correct profile links */}
          <motion.div
            className="flex justify-center gap-4 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <a href="https://github.com/vishnuvardhan148" target="_blank" rel="noopener noreferrer" 
              className="p-3 bg-white/80 rounded-full shadow-lg hover:bg-primary hover:text-white transition-all duration-300">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/vishnu-vardhan-gurram" target="_blank" rel="noopener noreferrer"
              className="p-3 bg-white/80 rounded-full shadow-lg hover:bg-primary hover:text-white transition-all duration-300">
              <Linkedin size={20} />
            </a>
            <a href="mailto:vishnuvardhangurram4@gmail.com"
              className="p-3 bg-white/80 rounded-full shadow-lg hover:bg-primary hover:text-white transition-all duration-300">
              <Mail size={20} />
            </a>
          </motion.div>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a 
              href="#contact" 
              className="rounded-lg border border-primary/30 bg-white/80 backdrop-blur-sm px-5 py-2.5 text-sm font-medium text-primary hover:bg-primary/10 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all duration-300 shadow-lg"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a 
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;
