import {motion} from 'framer-motion';
import Link from 'next/link';

const Banner = () => {
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
    return (
        <section 
        id='home' 
        className='max-w-contentContainer mx-auto py-20 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
            <motion.h3
            initial={{y: 10, opacity: 0 }} 
            animate={{y: 0, opacity: 1 }} 
            transition={{duration:0.5, delay: 0.6 }}
             className='text-lg font-titleFont tracking-wide text-textGreen'>Hi, my name is</motion.h3>
            <motion.h1
            initial={{y: 10, opacity: 0 }} 
            animate={{y: 0, opacity: 1 }} 
            transition={{duration:0.5, delay: 0.7 }}
            className='text-4xl lgl:text-6xl font-titleFont font-simibold flex flex-col'
            >Eman Sarwar Alam. <span className='text-textDark mt-2 lgl:mt-4'>I&apos;m MERN-Stack Developer.</span></motion.h1>
            <motion.p
            initial={{y: 10, opacity: 0 }} 
            animate={{y: 0, opacity: 1 }} 
            transition={{duration:0.5, delay: 0.8 }}
             className='text-base md:max-w-[650px] text-textDark font-medium'>
                
                I&apos;ve 1+ years of experience in React. I&apos;ve a strong foundation in MERN-Stack Development and I&apos;ve gathered skills in creating user-friendly and respondive web applications using React and its ecosystem. Also I&apos;m increasing my web-development skills regularly.
                {/* <a href=""><span>Learn More</span>
                    </a>  */}
            </motion.p>
            <Link  href="#project"
            onClick={handleScroll} >
            <motion.button 
            initial={{y: 10, opacity: 0 }} 
            animate={{y: 0, opacity: 1 }} 
            transition={{duration:0.7, delay: 0.9 }}
            
            className='w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300'>Check Out My Project</motion.button>
            </Link>
            
        </section>
    );
};

export default Banner;