import {motion} from 'framer-motion';

const Banner = () => {
    return (
        <section 
        id='home' 
        className='max-w-contentContainer mx-auto py-6 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4'>
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
            >Eman Sarwar Alam. <span className='text-textDark mt-2 lgl:mt-4'>I build things for the web.</span></motion.h1>
            <motion.p
            initial={{y: 10, opacity: 0 }} 
            animate={{y: 0, opacity: 1 }} 
            transition={{duration:0.5, delay: 0.8 }}
             className='text-base md:max-w-[650px] text-textDark font-medium'>
                
                I am a web developer with 2+ years of experience in React. I have a strong foundation in front-end & back-end development and an skilled in creating  user-friendly and respondive web applications using React and its ecosystem.
                {/* <a href=""><span>Learn More</span>
                    </a>  */}
            </motion.p>
            <motion.button 
            initial={{y: 10, opacity: 0 }} 
            animate={{y: 0, opacity: 1 }} 
            transition={{duration:0.5, delay: 0.9 }}
            className='w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300'>Check Out My Project</motion.button>
        </section>
    );
};

export default Banner;