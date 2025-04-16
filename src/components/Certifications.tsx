
import { motion } from "framer-motion";
import { Award, ExternalLink, Check } from "lucide-react";
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
  learnings: string[];
}

const certifications: CertificationProps[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    credentialLink: "https://www.credly.com/badges/0ee68356-8fe0-47ea-9ccf-8797d7c675a9/linked_in_profile",
    logo: "aws",
    bgColor: "bg-gradient-to-br from-orange-100 to-orange-50",
    iconColor: "text-orange-500",
    learnings: [
      "Cloud concepts and AWS global infrastructure",
      "AWS core services including compute, storage, networking, and databases",
      "Security best practices and compliance in AWS",
      "AWS pricing models, billing, and cost optimization"
    ]
  },
  {
    name: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
    issuer: "Microsoft",
    credentialLink: "https://learn.microsoft.com/en-us/users/vishnuvardhangurram-8824/credentials/9e7fe2d40c03d76d?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    logo: "azure",
    bgColor: "bg-gradient-to-br from-blue-100 to-blue-50",
    iconColor: "text-blue-500",
    learnings: [
      "Managing Azure identities and governance",
      "Implementing and managing Azure storage solutions",
      "Deploying and managing Azure compute resources",
      "Configuring and managing virtual networking"
    ]
  },
  {
    name: "NPTEL Online Certification – Introduction to Internet of Things",
    issuer: "National Programme on Technology Enhanced Learning",
    credentialLink: "https://drive.google.com/file/d/1dqqIuyz4a_NrcRz-rdHFYO7loPSImOh6/view?usp=sharing",
    logo: "nptel",
    bgColor: "bg-gradient-to-br from-green-100 to-green-50",
    iconColor: "text-green-600",
    learnings: [
      "Fundamentals of IoT architecture and protocols",
      "Sensor technologies and data collection methods",
      "IoT security considerations and best practices",
      "Real-world IoT applications and case studies"
    ]
  }
];

const CertificationCard = ({ name, issuer, credentialLink, logo, bgColor, iconColor, learnings }: CertificationProps) => {
  const getLogoImage = () => {
    switch(logo) {
      case "aws":
        return (
          <div className="w-32 h-32 flex items-center justify-center mx-auto mb-4">
            <img 
              src="/lovable-uploads/8e68447e-dc56-4e3e-a33f-0f1830902eac.png" 
              alt="AWS Certified Cloud Practitioner" 
              className="w-full h-full object-contain"
            />
          </div>
        );
      case "azure":
        return (
          <div className="w-28 h-28 flex items-center justify-center mx-auto mb-4">
            <img 
              src="/lovable-uploads/c67a6ad7-0cdb-4ff0-b82a-3f07e63e28b2.png" 
              alt="Microsoft Azure Administrator" 
              className="w-full h-full object-contain"
            />
          </div>
        );
      case "nptel":
        return (
          <div className="w-24 h-24 flex items-center justify-center mx-auto mb-4 rounded-full bg-green-100">
            <Award className={`${iconColor} w-12 h-12`} />
          </div>
        );
      default:
        return (
          <div className="w-16 h-16 flex items-center justify-center">
            <Award className={`${iconColor} w-8 h-8`} />
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
        <CardHeader className="pb-4 text-center relative">
          <div className="absolute top-0 right-0 h-24 w-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-xl"></div>
          {getLogoImage()}
          <CardTitle className="text-xl mt-2 font-bold">{name}</CardTitle>
          <Badge variant="secondary" className="text-xs font-medium px-3 py-1 bg-white/50 backdrop-blur-sm mx-auto mt-2">{issuer}</Badge>
        </CardHeader>
        <CardContent className="pt-0 flex-grow space-y-4">
          <Separator className="mb-4 opacity-30" />
          <div className="space-y-2">
            <h4 className="font-medium text-sm">What I learned:</h4>
            <ul className="space-y-2">
              {learnings.map((learning, index) => (
                <li key={index} className="flex items-start">
                  <Check className={`${iconColor} w-4 h-4 mt-1 mr-2 flex-shrink-0`} />
                  <span className="text-sm">{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full gap-2 hover:bg-primary/90 shadow"
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
    <section id="certifications" className="py-24 bg-gradient-to-b from-white to-secondary/20">
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
