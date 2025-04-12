
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import MotionWrapper from "./MotionWrapper";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace these with your actual EmailJS service, template, and user IDs
      await emailjs.send(
        "service_id", // Service ID
        "template_id", // Template ID
        {
          from_name: name,
          reply_to: email,
          message,
        },
        "user_id" // User ID (public key)
      );
      
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="section-container">
        <MotionWrapper>
          <h2 className="section-title mb-16">Let's Connect</h2>
        </MotionWrapper>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <MotionWrapper delay={0.1} direction="right">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold">Get In Touch</h3>
              
              <p className="text-lg text-muted-foreground">
                Feel free to reach out if you're looking for a passionate 
                cloud and DevOps enthusiast for your team, or if you just 
                want to connect!
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <Mail size={18} />
                  </div>
                  <a href="mailto:vishnuvardhangurram4@gmail.com" className="hover:text-primary transition-colors">
                    vishnuvardhangurram4@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <Github size={18} />
                  </div>
                  <a href="https://github.com/vishnuvardhan148" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    github.com/vishnuvardhan148
                  </a>
                </div>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                    <Linkedin size={18} />
                  </div>
                  <a href="https://www.linkedin.com/in/vishnu-vardhan-gurram" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    linkedin.com/in/vishnu-vardhan-gurram
                  </a>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center btn-primary"
                >
                  Download Resume <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            </div>
          </MotionWrapper>
          
          <MotionWrapper delay={0.3} direction="left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={`btn-primary w-full ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </MotionWrapper>
        </div>
      </div>
    </section>
  );
};

export default Contact;
