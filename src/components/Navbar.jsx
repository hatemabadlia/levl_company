import React from 'react';
import { styles } from '../style';
import { Link } from 'react-router-dom';
import logo from '../assets/lvl.png';
import { navLinks } from "../constants";
import { menu } from '../assets';
import { close } from '../assets';

export default function Navbar() {
    const [active, setActive] = React.useState("");
    const [toggle, settoggle] = React.useState(false);

    const handleScrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setActive(id);
        settoggle(false);
    };

    return (
        <nav className={`${
            styles.paddingX}
        w-full flex items-center py-2 fixed top-0 z-20`} >
            <div className='w-full flex items-center justify-between max-w-7xl mx-auto '>
                <Link to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        window.scrollTo(0, 0)
                        setActive("")
                    }}
                >
                    <img src={logo} alt='Hdtra' className='  w-14 h-16 p-1 ease-in duration-300 object-contain  hover:w-17  hover:p-0' />
                </Link>
                <ul className='list-none flex hidden items-center  sm:flex flex-row gap-10'>
                    {
                        navLinks.map((nav) => (
                            <li key={nav.id}
                                className={`ease-in duration-300 select-none
                            ${active === nav.id ? "text-white" : "text-secondary"}
                            hover:text-white hover:cursor-pointer hover:text-20px] hover:font-medium`
                                }
                                onClick={() => handleScrollToSection(nav.id)}
                            >
                                {nav.title}
                            </li>
                        ))
                    }
                </ul>
                <div className='sm:hidden ease-in duration-300  flex  felx-1 justify-end items-center'>
                    <img src={toggle ? close : menu} alt="menu"
                        className='ease-in duration-300 w-6 h-6 cursor-pointer object-contain cursor-pointer'
                        onClick={() => settoggle(!toggle)}
                    />
                    <div className={`${toggle ? 'flex' : ' hidden'}
                    p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-20 rounded-xl `}>
                        <ul className='list-none flex flex-col justify-center gap-4 items-center  '>
                            {
                                navLinks.map((nav) => (
                                    <li key={nav.id}
                                        className={`ease-in duration-300 select-none
                                    ${active === nav.id ? "text-white" : "text-secondary"}
                                    font-poppins text-[16px] font-medium cursor-pointer `}
                                        onClick={() => handleScrollToSection(nav.id)}
                                    >
                                        {nav.title}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
