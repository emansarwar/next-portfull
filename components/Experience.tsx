import { useState } from "react";
import SectionTitle from "./SectionTitle";
import ReactBD from "./works/ReactBD";
import Google from "./works/Google";
import Apple from "./works/Apple";
import Amazon from "./works/Amazon";
import Alibaba from "./works/Alibaba";

const Experience = () => {
  const [reactBD, setReactBD] = useState(true);
  const [google, setGoogle] = useState(false);
  const [apple, setApple] = useState(false);
  const [amazon, setAmazon] = useState(false);
  const [alibaba, setAlibaba] = useState(false);

  const handleReactBD = () => {
    setReactBD(true);
    setApple(false);
    setAmazon(false);
    setGoogle(false);
    setAlibaba(false);
  };
  const handleGoogle = () => {
    setReactBD(false);
    setApple(false);
    setAmazon(false);
    setGoogle(true);
    setAlibaba(false);
  };
  const handleAmazon = () => {
    setReactBD(false);
    setApple(false);
    setAmazon(true);
    setGoogle(false);
    setAlibaba(false);
  };
  const handleAlibaba = () => {
    setReactBD(false);
    setApple(false);
    setAmazon(false);
    setGoogle(false);
    setAlibaba(true);
  };
  const handleApple = () => {
    setReactBD(false);
    setApple(true);
    setAmazon(false);
    setGoogle(false);
    setAlibaba(false);
  };
  return (
    <section id="experience" className="max-w-contentContainer mx-auto py-20 lgl:py-20 mdl:py-24 px-4">
      <SectionTitle title="Where I have worked" titleNo="02"></SectionTitle>
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleReactBD}
            className={`${
              reactBD ? "border-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
            }  border-l-2 bg-transparent hover:bg-[#112249] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            reactBD
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              google ? "border-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
            }  border-l-2    bg-transparent hover:bg-[#112249] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Google
          </li>
          <li
            onClick={handleApple}
            className={`${
              apple ? "border-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
            }  border-l-2    bg-transparent hover:bg-[#112249] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Apple
          </li>
          <li
            onClick={handleAmazon}
            className={`${
              amazon ? "border-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
            }  border-l-2    bg-transparent hover:bg-[#112249] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Amazon
          </li>
          <li
            onClick={handleAlibaba}
            className={`${
              alibaba ? "border-textGreen text-textGreen" : "border-l-hoverColor text-textDark"
            }  border-l-2    bg-transparent hover:bg-[#112249] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Ali baba
          </li>
        </ul>
        {reactBD && <ReactBD />}
        {google && <Google />}
        {apple && <Apple />}
        {amazon && <Amazon />}
        {alibaba && <Alibaba />}
      </div>
    </section>
  );
};

export default Experience;
