    import React from 'react'
    import { styles } from '../style'
    import {motion} from "framer-motion"
    import { slideIn } from "../Utils/motion";
    import { SectionWrapper } from "../hoc/SectionWrapper";

    function Contact() {
    const formRef = React.useRef();
    const [form, setForm] = React.useState({
        name: "",
        email: "",
        message: "",
    });
    const handelchange = (e) =>{
        const {target} = e;
        const {name,value} = target;
        setForm({
        ...form,
        [name] : value
        })
    }
    const handelsubmit = (e) =>{

    }

    return (
        <div
        className={` flex xl:flex-row flex-col-reverse gap-2 overflow-hidden`}
        >
        <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className=' bg-black-100 p-8 rounded-2xl'
        >
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact.</h3>
        
            <form
            ref={formRef}
            onSubmit={handelsubmit}
            className=' flex flex-col justify-center gap-8'
            >
            <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Name</span>
                <input
                type='text'
                name='name'
                value={form.name}
                onChange={handelchange}
                placeholder="What's your good name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
            </label>
            <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your email</span>
                <input
                type='email'
                name='email'
                value={form.email}
                onChange={handelchange}
                placeholder="What's your web address?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
            </label>
            <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Message</span>
                <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handelchange}
                placeholder='What you want to say?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
            </label>
            <button
                type='submit'
                className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
                send
            </button>
            </form>
        </motion.div>

        </div>
    )
    }
    export default SectionWrapper(Contact,"contact")