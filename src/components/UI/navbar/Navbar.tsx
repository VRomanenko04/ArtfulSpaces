import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Media from 'react-media';
import BurgerBtn from '../burger-btn/BurgerBtn';
import './_navbar.scss';

import logo from '../../../assets/ArtfulSpaces_logo.png';
import cabinet_btn from '../../../assets/portrait.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hideOrShow, setHideOrShow] = useState({});
    const location = useLocation();

        //Смена состояния и стиля элемента
        const handleMenu = () => {
            setIsOpen((prev) => !prev);
            setHideOrShow(() => {
                if (isOpen) {
                    return {};
                } else {
                    return { display: 'flex'};
                }
            });
        }

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <div className='navbar'>
            <Link to='/' className='logo'>
                <img src={logo} alt="logo" />
            </Link>
            <div className='menu__wrapper'>
                <BurgerBtn isOpen={isOpen} handleMenu={handleMenu}/>
                <div className='nav nav__vision' style={hideOrShow}>
                    <nav className='nav__body'>
                        <Media queries={{ small: '(max-width: 1140px)' }}>
                            {(matches) => (
                                <AnimatePresence initial={false}>
                                        <motion.ul 
                                            className={`nav__list ${isOpen ? 'active__menu' : ''}`}
                                            initial={{ x: matches.small ? 300 : 0 }}
                                            animate={{ x: isOpen ? 0 : (matches.small ? 500 : 0)}}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <NavLink className='menu_link' to='/'>Home</NavLink>
                                            <NavLink className='menu_link' to='order'>Order</NavLink>
                                            <NavLink className='menu_link' to='examples'>Work Examples</NavLink>
                                            <NavLink className='menu_link' to='contact'>Contact</NavLink>
                                            {location.pathname !== 'cabinet' && (
                                                <motion.li className='nav__li' >
                                                    <Link className='cabinet' to='cabinet'>
                                                        <img src={cabinet_btn} alt="cabinet_btn" />
                                                    </Link>
                                                </motion.li>
                                            )}
                                        </motion.ul>
                                </AnimatePresence>
                            )}
                        </Media>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar;