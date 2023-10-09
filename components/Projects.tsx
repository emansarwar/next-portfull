import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'

import { doctorImg, lawyerImg, libraryImg } from '@/public/assets/images'
import { TbBrandGithub } from 'react-icons/tb'
import {RxOpenInNewWindow} from "react-icons/rx"

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto py-24 lgl:px-20">
      <SectionTitle title="Projects" titleNo="03"></SectionTitle>
      <div className='w-full flex flex-col items-center justify-between gap-28 mt-10 '>
      <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        <div className='flex flex-col xl:flex-row gap-6'>
            <a href="https://doctors-eye.web.app/"
            className='w-full xl:w-1/2 h-auto relative group' target='_blank'>
                <div>
                    <Image className='w-full h-full object-contain  rounded'src={doctorImg} alt='doctor-img'/>
                </div>
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>featured project</p>
                <h3 className='text-2xl font-bold'>Doctors Eye</h3>
                <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>An Amazon clone websete for visualizing personalized Amazon websete. View your products, Add your account with <span className='text-textGreen'>O-auth </span> and then make the purchage using <span className='text-textGreen'>stripe</span>.

                </p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                    <li>Reactjs</li>
                    <li>stripe</li>
                    <li>JWT</li>
                    <li>firebase</li>
                    <li>Nodejs</li>
                    <li>Expressjs</li>
                    <li>MongoDB</li>
                </ul>
                <div className='text=2xl flex gap-4'>
                    <a 
                    className='hover:text-textGreen duration=300'
                    href="https://github.com/emansarwar/doctors-eye-client" target='_blank'>
                        <TbBrandGithub/>
                    </a>
                    <a 
                    className='hover:text-textGreen duration=300'
                    href="https://doctors-eye.web.app/" target='_blank'>
                        <RxOpenInNewWindow/>
                    </a>
                </div>
            </div>
        </div>
        
      </div>
      <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        <div className='flex flex-col xl:flex-row-reverse gap-6'>
            <a href="https://doctors-eye.web.app/"
            className='w-full xl:w-1/2 h-auto relative group' target='_blank'>
                <div>
                    <Image className='w-full h-full object-contain rounded'src={libraryImg} alt='doctor-img'/>
                </div>
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-start z-10'>
                <p className='font-titleFont  text-textGreen text-sm tracking-wide'>featured project</p>
                <h3 className='text-2xl font-bold'>Book Worm</h3>
                <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 xl:-mr-16 rounded-md'>An Amazon clone website for visualizing personalized Amazon website. View your products, Add your account with <span className='text-textGreen'>O-auth </span> and then make the purchage using <span className='text-textGreen'>stripe</span>.

                </p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                    <li>Reactjs</li>
                    
                    <li>JWT</li>
                    <li>firebase</li>
                    <li>Nodejs</li>
                    <li>Expressjs</li>
                    <li>MongoDB</li>
                </ul>
                <div className='text=2xl flex gap-4'>
                    <a 
                    className='hover:text-textGreen duration=300'
                    href="https://github.com/emanSarwar/new-book-house" target='_blank'>
                        <TbBrandGithub/>
                    </a>
                    <a 
                    className='hover:text-textGreen duration=300'
                    href="https://new-book-house.web.app/" target='_blank'>
                        <RxOpenInNewWindow/>
                    </a>
                </div>
            </div>
        </div>
        
      </div>
      <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
        <div className='flex flex-col xl:flex-row gap-6'>
            <a href="https://doctors-eye.web.app/"
            className='w-full xl:w-1/2 h-auto relative group' target='_blank'>
                <div>
                    <Image className='w-full h-full object-contain rounded'src={lawyerImg} alt='doctor-img'/>
                </div>
            </a>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>featured project</p>
                <h3 className='text-2xl font-bold'>Legal-Aid</h3>
                <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>An Amazon clone website for visualizing personalized Amazon website. View your products, Add your account with <span className='text-textGreen'>O-auth </span> and then make the purchage using <span className='text-textGreen'>stripe</span>.

                </p>
                <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                    <li>Reactjs</li>
                    
                    <li>JWT</li>
                    <li>firebase</li>
                    <li>Nodejs</li>
                    <li>Expressjs</li>
                    
                </ul>
                <div className='text=2xl flex gap-4'>
                    <a 
                    className='hover:text-textGreen duration=300'
                    href="https://github.com/emanSarwar/law-for-right" target='_blank'>
                        <TbBrandGithub/>
                    </a>
                    <a 
                    className='hover:text-textGreen duration=300'
                    href="https://lawforright.firebaseapp.com/" target='_blank'>
                        <RxOpenInNewWindow/>
                    </a>
                </div>
            </div>
        </div>
        
      </div>
      </div>
      </section>
  )
}

export default Projects