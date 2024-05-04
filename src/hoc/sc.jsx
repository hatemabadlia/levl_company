import { motion } from "framer-motion";

import { styles } from "../style";
import { staggerContainer } from "../Utils/motion";

export const Sc = (Component, idName) =>
function HOC() {
    return (
    <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={` max-w-7xl mx-auto relative z-20`}
    >
        <span className="hash-span" id={idName}>
        &nbsp;
        </span>

        <Component />
    </motion.section>
    );
};
