import React from "react";
import { motion } from "framer-motion";

const ScrollAnimationProvider = ({ children, delayIncrement = 0.2 }) => {
  const childrenArray = React.Children.toArray(children);

  return (
    <>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, scale: 0.95, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 0.5,
            duration: 0.8,
            delay: index * delayIncrement,
          }}
          viewport={{ once: true }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
};

export default ScrollAnimationProvider;
