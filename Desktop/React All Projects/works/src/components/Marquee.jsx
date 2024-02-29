import { motion } from "framer-motion";
import React from "react";

function Marquee({ imagesurl,direction }) {
  return (
    <div className="flex w-full overflow-hidden">
    <motion.div initial={{x: direction === 'left' ? "0" : "-100%"}} animate={{x: direction === 'left' ? "-100%" : "0"}} transition={{ease: 'linear', duration:15, repeat:Infinity}} className="flex w-full gap-10 whitespace-nowrap overflow-hidden items-center  flex-shrink-0 py-3">
      {imagesurl.map((url, index) => (
        <img
          key={index}
          src={url}
          className="flex flex-shrink-0 w-[6.9vw] object-cover aspect-auto"
        />
      ))}
    </motion.div>

    <motion.div initial={{x: direction === 'left' ? "0" : "-100%"}} animate={{x: direction === 'left' ? "-100%" : "0"}} transition={{ease: 'linear', duration:15, repeat:Infinity}} className="flex w-full gap-10 whitespace-nowrap overflow-hidden items-center  flex-shrink-0 py-3">
      {imagesurl.map((url, index) => (
        <img
          key={index}
          src={url}
          className="flex flex-shrink-0 w-[6.9vw] object-cover aspect-auto"
        />
      ))}
    </motion.div>
  
    </div>
  );
}

export default Marquee;
