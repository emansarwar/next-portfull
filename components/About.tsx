import { AiFillThunderbolt } from "react-icons/ai";
import SectionTitle from "./SectionTitle";
import { profileImg } from "@/public/assets/images";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="max-w-containerSmall mx-auto py-20 lgl:py-20 flex flex-col gap-4  lgl:gap-8 mdl:py-24 mdl:px-10 xl:px-4">
      <SectionTitle title="About Me" titleNo="01"></SectionTitle>
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Eman Sarwar Alam and I enjoy creating things that live on the internet.
          </p>
          <p>
            As a junior mern-stack developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind etc. I excel in designing and maintaining responsive websites that offer a smooth user experience.
          </p>
          <p>I have experience in Frontend (HTML, CSS, Javascript, React), Backend(Node.Js), Databases(MongoDb) and UI/UX designs (Figma)</p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-2">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image className="rounded-lg h-full object-cover" src={profileImg} alt="profileimg"></Image>
              <div className="hidden lgl:inline-block absolute w-full h-full bg-textGreen/5 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
            
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border  border-textGreen rounded-md group-hover:-translate-x-6 group-hover:-translate-y-6 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
