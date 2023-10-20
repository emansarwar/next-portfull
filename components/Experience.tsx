import { useState } from "react";
import SectionTitle from "./SectionTitle";
import SOFTEX from "./works/SOFTEX";
// import Google from "./works/Google";
// import Apple from "./works/Apple";
// import Amazon from "./works/Amazon";
// import Alibaba from "./works/Alibaba";

const Experience = () => {
  const [softex, setSoftex] = useState(true);
  // const [google, setGoogle] = useState(false);
  // const [apple, setApple] = useState(false);
  // const [amazon, setAmazon] = useState(false);
  // const [alibaba, setAlibaba] = useState(false);

  const handleSoftex = () => {
    setSoftex(true);
    // setApple(false);
    // setAmazon(false);
    // setGoogle(false);
    // setAlibaba(false);
  };
  
  return (
    <section id="experience" className="max-w-contentContainer mx-auto py-20 lgl:py-20 mdl:py-24 px-4">
      <SectionTitle title="Where I have worked" titleNo="02"></SectionTitle>
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleSoftex}
            className={`${
              softex ? "border-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
            }  border-l-2 bg-transparent hover:bg-[#112249] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            SOFTEX
          </li>
          
         </ul>
        {SOFTEX && <SOFTEX/>}
        
      </div>
    </section>
  );
};

export default Experience;
