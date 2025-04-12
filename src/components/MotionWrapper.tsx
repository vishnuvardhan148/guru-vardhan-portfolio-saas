
import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

interface MotionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  type?: "tween" | "spring";
}

const MotionWrapper = ({ 
  children, 
  className = "",
  delay = 0,
  direction = "up",
  type = "tween"
}: MotionWrapperProps) => {
  
  const getDirectionAnimation = (): Variants => {
    switch (direction) {
      case "down":
        return {
          hidden: { y: -40, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case "left":
        return {
          hidden: { x: 40, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case "right":
        return {
          hidden: { x: -40, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case "up":
      default:
        return {
          hidden: { y: 40, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay, type }}
      variants={getDirectionAnimation()}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
