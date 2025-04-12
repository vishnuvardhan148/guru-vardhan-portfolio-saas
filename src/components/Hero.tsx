
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 subtle-gradient">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-violet-500/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.p 
              className="text-primary font-medium mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi there 👋 I'm
            </motion.p>
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="gradient-text">Vishnu Vardhan Gurram</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Cloud Computing & DevOps Enthusiast
            </motion.p>
            
            <motion.p 
              className="text-lg mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Computer Science student passionate about building scalable cloud applications, 
              AI solutions, and exploring DevOps technologies.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a 
                href="#contact" 
                className="rounded-lg bg-secondary px-5 py-2.5 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 focus:outline-none focus:ring-4 focus:ring-secondary/50 transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            className="hidden lg:flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-[400px] h-[400px]">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary via-violet-500 to-purple-700 opacity-20 absolute animate-pulse"></div>
              <div className="w-[95%] h-[95%] rounded-full bg-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <div className="relative w-[90%] h-[90%] rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-violet-500/20 backdrop-blur-sm border border-white/10 p-2">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold gradient-text">VVG</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a 
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary animate-float"
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
