// import React from 'react';

// const RightSide = () => {
//     return (
//         <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
//             <a href="mailto:emansarwar3@gmail.com">
//                 <p className='text-s rotate-90 w-72 tracking-wide text-textGreen'>Get-In-Touch</p>
//             </a>
//             <span className='w-[2px] h-32 bg-textDark inline-flex'></span>
//         </div>
//     );
// };

// export default RightSide;

import React from 'react';
import {TbBrandGithub} from 'react-icons/tb';
import {SlSocialYoutube} from 'react-icons/sl';
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram
} from 'react-icons/sl';
const RightSide = () => {
    return (
        <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'
        >
            <div className='flex flex-col gap-4'>
                
                
                <a href="https://www.facebook.com/emansarwar.emu" target='_blank'>
                    <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center  hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <SlSocialFacebook/></span>
                </a>
                
                <a href="https://www.instagram.com/sarwar_eman/" target='_blank'>
                    <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center  hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300'>
                        <SlSocialInstagram/></span>
                </a>
            </div>
            <div className='w-[2px] h-32 bg-textDark'></div>
        </div>
    );
};

export default RightSide;