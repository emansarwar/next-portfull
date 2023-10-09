import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Alibaba = () => {
  return (
    <motion.div 
    // initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ opacity: 0.1 }}
     initial={{y: 10, opacity: 0 }} 
    animate={{y: 0, opacity: 1 }} 
    transition={{duration:0.5}}  className="w-full">
      <h3 className="flex gap-1 font-midium text-xl font-littleFont">
        Engineer <span className="text-textGreen tracking-wide">@Alibaba</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Jan 2023 - Present</p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Write modern, performant, maintainable code for a diverse array of client and internal projects.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Work with a variety of different languages, platforms, frameworks and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordFress, Prismic, and Netlify.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Communicate with multi-disciplinary teams of  engineers, designers, producers, and clients on a daily basis.
        </li>
      </ul>
    </motion.div>
  );
};

export default Alibaba;
