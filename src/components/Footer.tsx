
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-bold gradient-text">Vishnu Vardhan Gurram</p>
            <p className="text-sm text-muted-foreground">Cloud Computing & DevOps Enthusiast</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/vishnuvardhan148" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/vishnu-vardhan-gurram" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:vishnuvardhangurram4@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Vishnu Vardhan Gurram. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
