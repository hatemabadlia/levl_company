    import React from 'react'
    import { Tilt } from 'react-tilt'
    import {motion} from 'framer-motion'
    import { styles } from '../style'
    import { services } from '../constants'
    import { fadeIn,textVariant } from '../Utils/motion'
    import { SectionWrapper } from "../hoc/SectionWrapper";
    import "./about.css"
    const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='cardskils xs:w-[200px] w-xl'>
        <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className=' w-[300px] border-2 border-green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
        <div
            options={{
            max: 45,
            scale: 1,
            speed: 450,
            }}
            className='bg-tertiary rounded-[20px] py-4 px-12 min-h-[200px] flex justify-evenly items-center flex-col'
        >
                <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
            />
            <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
            </h3>
        </div>
        </motion.div>
    </Tilt>
    );
    function About() {
    return (
        <>
        <motion.div variants={textVariant()}>
        <h1 className={styles.sectionHeadText}>
            overview 
        </h1>
        </motion.div>
        <motion.p variants={fadeIn("","",0.9,1)}>
        <p className='text-secondary mt-4 text-[17px] max-w-3xl leading-[30px] text-center '>
        At levl, we are a passionate team of creative professionals 
        specializing in web development, Android and iOS application creation, 
        logo design, video editing, and film-making. Our mission is to bring innovative and 
        tailored solutions to our clients, empowering them to achieve their digital goals with excellence.
        </p>
        </motion.p>
        <div className='mt-20 flex justify-center align-center flex-wrap gap-10'>
        {   
            services.map((service,index)=>(	
            <ServiceCard key={service.title} index={index} {...service} />
            ))
        }
        </div>
        </>
    )
    }
    export default SectionWrapper(About,"about")