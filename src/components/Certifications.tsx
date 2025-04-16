
import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import MotionWrapper from "./MotionWrapper";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

interface CertificationProps {
  name: string;
  issuer: string;
  credentialLink: string;
  logo?: string;
}

const certifications: CertificationProps[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    credentialLink: "https://www.credly.com/badges/0ee68356-8fe0-47ea-90e4-7a337f3e84f7/public_url",
    logo: "aws"
  },
  {
    name: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
    issuer: "Microsoft",
    credentialLink: "https://www.credly.com/badges/9ba6b9f7-1704-4d11-95c7-f7ed5c5706f6/public_url",
    logo: "azure"
  },
  {
    name: "NPTEL Online Certification – Introduction to Internet of Things",
    issuer: "National Programme on Technology Enhanced Learning",
    credentialLink: "https://drive.google.com/file/d/1dqqIuyz4a_NrcRz-rdHFYO7loPSImOh6/view?usp=sharing",
    logo: "nptel"
  }
];

const CertificationCard = ({ name, issuer, credentialLink, logo }: CertificationProps) => {
  const getLogo = () => {
    switch(logo) {
      case "aws":
        return "🔶";
      case "azure":
        return "🔷";
      case "nptel":
        return "🎓";
      default:
        return "📜";
    }
  };
  
  return (
    <motion.div 
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between">
            <div className="text-3xl mb-2">{getLogo()}</div>
            <Badge variant="secondary" className="text-xs font-medium">{issuer}</Badge>
          </div>
          <CardTitle className="text-xl">{name}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 flex-grow">
          <Separator className="mb-4" />
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full gap-2"
            variant="outline"
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
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="section-container">
        <MotionWrapper>
          <h2 className="section-title mb-16">Certifications</h2>
        </MotionWrapper>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
