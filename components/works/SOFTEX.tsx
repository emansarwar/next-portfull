import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const SOFTEX = () => {
  return (
    <motion.div 
    
    initial={{y: 10, opacity: 0 }} 
    animate={{y: 0, opacity: 1 }} 
    transition={{duration:0.5 }} 
    className="w-full">
      <h3 className="flex gap-1 font-midium text-xl font-littleFont">
        Developer <span className="text-textGreen tracking-wide">@SOFTEX</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Jan 2023 - Feb 2023</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          To write modern, performant, maintainable code for a diverse array of client and internal projects.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
        To work with a variety of different languages, platforms, frameworks and content management systems such as JavaScript, TypeScript,
          React, and Netlify.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          To communicate with multi-disciplinary teams of engineers, producers, and clients on a daily basis.
        </li>
      </ul>
    </motion.div>
  );
};

export default SOFTEX;
