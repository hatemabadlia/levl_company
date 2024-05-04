import React from "react";
import "./body.css"
import { styles } from "../style";
import imges from "../assets/v.png";
import { motion } from "framer-motion";
import { fadeIn } from "../Utils/motion";
import { SectionWrapper } from "../hoc/SectionWrapper";

 function Body() {
 
    return (
    <motion.div variants={fadeIn("","",0.9,1)}>
        <div className="feature">
            <h1  className={styles.heroHeadText+'levltitl'} style={{color:"white"}}>Levl Company</h1>
            <h3 className={styles.heroSubText}style={{color:"yellow"}}> Unlimited Service </h3>
            <p className={"feature-pargraphr"}>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Nihil enim suscipit ipsam iusto, 
            dolores placeat, natus illum totam quod distinctio 
            porro impedit ex deserunt rem excepturi hic quos expedita?
            Assumenda!</p>
            <ul className="tato">
                <li className="tatot"><img className="img_verificate" src={imges} /><span>Growth</span> </li>
                <li className="tatot"><img className="img_verificate" src={imges}/><span> Creativity </span> </li>
                <li className="tatot"><img className="img_verificate" src={imges}/><span> Confidence </span></li>
            </ul>
        </div>
    </motion.div>
    )
}
export default SectionWrapper(Body,"Body")