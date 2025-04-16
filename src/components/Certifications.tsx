
import { motion } from "framer-motion";
import { Award, ExternalLink, Shield } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

interface CertificationProps {
  name: string;
  issuer: string;
  credentialLink: string;
  logo: string;
  bgColor: string;
  iconColor: string;
}

const certifications: CertificationProps[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    credentialLink: "https://www.credly.com/badges/0ee68356-8fe0-47ea-90e4-7a337f3e84f7/public_url",
    logo: "aws",
    bgColor: "bg-gradient-to-br from-orange-100 to-orange-50",
    iconColor: "text-orange-500"
  },
  {
    name: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
    issuer: "Microsoft",
    credentialLink: "https://www.credly.com/badges/9ba6b9f7-1704-4d11-95c7-f7ed5c5706f6/public_url",
    logo: "azure",
    bgColor: "bg-gradient-to-br from-blue-100 to-blue-50",
    iconColor: "text-blue-500"
  },
  {
    name: "NPTEL Online Certification – Introduction to Internet of Things",
    issuer: "National Programme on Technology Enhanced Learning",
    credentialLink: "https://drive.google.com/file/d/1dqqIuyz4a_NrcRz-rdHFYO7loPSImOh6/view?usp=sharing",
    logo: "nptel",
    bgColor: "bg-gradient-to-br from-green-100 to-green-50",
    iconColor: "text-green-600"
  }
];

const CertificationCard = ({ name, issuer, credentialLink, logo, bgColor, iconColor }: CertificationProps) => {
  const getLogoImage = () => {
    switch(logo) {
      case "aws":
        return (
          <div className="relative w-16 h-16 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=100&auto=format&fit=crop" 
              alt="AWS" 
              className="absolute inset-0 w-full h-full object-cover rounded-full opacity-20"
            />
            <Shield className={`${iconColor} w-8 h-8 z-10`} />
          </div>
        );
      case "azure":
        return (
          <div className="relative w-16 h-16 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1535191042502-e6a9a3d407e7?q=80&w=100&auto=format&fit=crop" 
              alt="Azure" 
              className="absolute inset-0 w-full h-full object-cover rounded-full opacity-20"
            />
            <Shield className={`${iconColor} w-8 h-8 z-10`} />
          </div>
        );
      case "nptel":
        return (
          <div className="relative w-16 h-16 flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=100&auto=format&fit=crop" 
              alt="NPTEL" 
              className="absolute inset-0 w-full h-full object-cover rounded-full opacity-20"
            />
            <Shield className={`${iconColor} w-8 h-8 z-10`} />
          </div>
        );
      default:
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <Shield className={`${iconColor} w-8 h-8`} />
          </div>
        );
    }
  };
  
  return (
    <motion.div 
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="h-full"
    >
      <Card className={`h-full flex flex-col border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${bgColor}`}>
        <CardHeader className="pb-4 relative">
          <div className="absolute top-0 right-0 h-24 w-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl"></div>
          <div className="flex items-center justify-between">
            {getLogoImage()}
            <Badge variant="secondary" className="text-xs font-medium px-3 py-1 bg-white/50 backdrop-blur-sm">{issuer}</Badge>
          </div>
          <CardTitle className="text-xl mt-4 font-bold">{name}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 flex-grow">
          <Separator className="mb-4 opacity-30" />
          <div className="flex items-center mt-2">
            <Award className={`${iconColor} mr-2`} size={16} />
            <span className="text-sm text-muted-foreground">Verified Credential</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full gap-2 bg-white hover:bg-white/80 text-foreground border-none shadow"
            onClick={() => window.open(credentialLink, "_blank", "noopener,noreferrer")}
          >
            <ExternalLink size={16} />
            View Credential
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-gradient-to-br from-secondary/30 to-white">
      <div className="section-container">
        <MotionWrapper>
          <h2 className="section-title mb-4">Professional Certifications</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise in cloud technologies and IoT
          </p>
        </MotionWrapper>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {certifications.map((certification, index) => (
            <MotionWrapper key={certification.name} delay={index * 0.1}>
              <CertificationCard {...certification} />
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
