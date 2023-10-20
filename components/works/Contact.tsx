
import emailjs from '@emailjs/browser';

import Image from "next/image";
// import Link from 'next/link';
import React, { useState,  useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import contactImg from "../../public/assets/images/contact.png";
import Link from "next/link";
import SectionTitle from "../SectionTitle";
import ContactForm from './ContactForm';
// import ContactForm from "./ContactForm";

const Contact = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    // setShowMenu(false)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
} 
const sendEmail = (e:any) => {
  

  e.preventDefault();

  emailjs.sendForm('service_nxzg0qp', 'template_92kicnm',  'oV98rXXFoX8VpPWgA')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};

  return (
    <section id="contact" className="w-full lg:h-screen  py-20 xl:py-20">
      <SectionTitle title="Get In Touch" titleNo="03"></SectionTitle>
      <div className="max-w-[1240px] m-auto px-2 w-full ">
        {/* <h2>Get In Touch</h2> */}
        <div className="grid lg:grid-cols-5 py-4 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image className="rounded-xl hover:scale-105 ease-in duration-300" src={contactImg} alt="/" />
              </div>
              <div>
                <h2 className="py-2">Eman Sarwar Alam</h2>
                <p>Front-End Developer</p>
                <p className="py-4">I am available for freelance or full-time positions. Contact me and let&apos;s talk.</p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <a href="https://www.linkedin.com/in/emansarwaralam/" target="_blank" rel="noreferrer">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a href="https://github.com/emanSarwar" target="_blank" rel="noreferrer">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <Link href="/resume">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <ContactForm/>
              
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="#home"
          onClick={handleScroll}
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
