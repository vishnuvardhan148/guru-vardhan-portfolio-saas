import { useState, FormEvent, useRef } from "react";
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
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        "service_6n9xbjh", // Your EmailJS service ID
        "template_1wyg1xr", // Your EmailJS template ID
        formRef.current as HTMLFormElement,
        "31C5xIlGBVHUcSvJo" // Your EmailJS public key
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
                  href="https://drive.google.com/file/d/1IRqC8ocjNBTOtFq4uLyAjnxama3GVGLT/view?usp=sharing" 
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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="reply_to" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  id="reply_to"
                  name="reply_to"
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
                  name="message"
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
