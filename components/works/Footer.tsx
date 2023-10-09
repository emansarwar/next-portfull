import React from 'react'
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialYoutube } from 'react-icons/sl'
import { TbBrandGithub } from 'react-icons/tb'

const Footer = () => {
  return (
    <div className='hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4'>
        <a href="https://github.com/emanSarwar" target='_blank'>
                    <span className='w-10 h-10 text-xl bg-bodyColor border-[1px]   hover:border-textGreen text-zinc-200 border-zinc-700  rounded-full inline-flex items-center justify-center  hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <TbBrandGithub/></span>
                </a>
                <a href="https://www.linkedin.com/in/emansarwaralam/" target='_blank'>
                    <span className='w-10 h-10 text-xl bg-bodyColor border-[1px]   hover:border-textGreen text-zinc-200 border-zinc-700  rounded-full inline-flex items-center justify-center  hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <SlSocialLinkedin/></span>
                </a>
                <a href="https://www.facebook.com/emansarwar.emu" target='_blank'>
                    <span className='w-10 h-10 text-xl bg-bodyColor border-[1px]   hover:border-textGreen text-zinc-200 border-zinc-700  rounded-full inline-flex items-center justify-center  hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <SlSocialFacebook/></span>
                </a>
                <a href="https://github.com/emanSarwar" target='_blank'>
                    <span className='w-10 h-10 text-xl bg-bodyColor border-[1px]   hover:border-textGreen text-zinc-200 border-zinc-700  rounded-full inline-flex items-center justify-center  hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <SlSocialYoutube/></span>
                </a>
                <a href="https://github.com/emanSarwar" target='_blank'>
                    <span className='w-10 h-10 text-xl bg-bodyColor border-[1px]   hover:border-textGreen text-zinc-200 border-zinc-700  rounded-full inline-flex items-center justify-center  hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <SlSocialInstagram/></span>
                </a>
    </div>
  )
}

export default Footer