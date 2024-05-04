import React from 'react'
import '../styles/team.css'
import team01 from '../assets/hatem.png'
import team02 from '../assets/mahdi.png'
import team03 from '../assets/saif.png'
import { Tilt } from 'react-tilt'
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SectionWrapper } from "../hoc/SectionWrapper";
import { fadeIn ,zoomIn} from '../Utils/motion'
import './team.css'
var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
const teamMembers = [
    {
        imgUrl: team01,
        name: 'hatem',
        position: 'Director of the Development Department'
    },

    {
        imgUrl: team03,
        name: 'saif',
        position: 'Director of the audio-visual department'
    },

    {
        imgUrl: team02,
        name: 'mahdi',
        position: 'Director of the Media and Advertising Department'
    },


]

const Team = () => {
    return (
        <section className='our__team'>
            <div className='container'>
                <div className='team__content'>
                    <motion.h6 variants={zoomIn(0.2, 0.75)} className='subtitle'>Our Team</motion.h6>
                    <motion.p variants={zoomIn(0.2, 0.5)}>
                        Join With <span className='highlight'>Our Team</span>
                    </motion.p>
                </div>
                
                <motion.div variants={fadeIn("","",0.9,1)} className='team__wrapper'>
                    {
                        teamMembers.map((item, index) => (
                            
                            <Tilt className='team__item' key={index}>
                                <div className='team__img'>
                                    <img className='team_img_l'  src={item.imgUrl} alt='' />
                                </div>
                                <div className='team__details'>
                                    <h4>{item.name}</h4>
                                    <p className='description text-center'>{item.position}</p>

                                    <div className='team__member-social'>
                                        <span><i class='ri-linkedin-line'></i></span>
                                        <span><i class='ri-twitter-line'></i></span>
                                        <span><i class='ri-facebook-line'></i></span>
                                    </div>
                                </div>
                            </Tilt>
                        ))
                    }
                </motion.div>
                
            </div>
        </section>
    )
}

export default SectionWrapper(Team,"Team")