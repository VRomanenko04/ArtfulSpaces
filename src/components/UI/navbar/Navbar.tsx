import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';
import BurgerBtn from '../burger-btn/BurgerBtn';
import './_navbar.scss';

import logo_home from '../../../assets/ArtfulSpaces_logo.png';
import logo from '../../../assets/ArtfulSpaces_logo_black.png';
import cabinet_btn from '../../../assets/cabinet_icon.svg';
import cabinet_home_btn from '../../../assets/cabinet_icon_white.svg';
import Localisation from '../../smart/localisation/Localisation';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [hideOrShow, setHideOrShow] = useState({});
    const [componentClass, setComponentClass] = useState<string>('menu_link');
    const location = useLocation();

    const { t } = useTranslation();

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

    //Смена класса по URL
    const isHomePage: boolean = location.pathname === '/';
    const newClass: string = isHomePage ? 'menu_link_home' : 'menu_link';

    if (componentClass !== newClass) {
        setComponentClass(newClass);
    }

    //Закрытие после перехода по страницам
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <div className='navbar'>
            {
                isHomePage ? 
                <Link to='/' className='logo'>
                    <img src={logo_home} alt="logo" />
                </Link>
                : 
                <Link to='/' className='logo'>
                <img src={logo} alt="logo" />
                </Link>
            }
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
                                            <NavLink className={componentClass} to='/'>{t("navHome")}</NavLink>
                                            <NavLink className={componentClass} to='order'>{t("navOrder")}</NavLink>
                                            <NavLink className={componentClass} to='examples'>{t("navExamples")}</NavLink>
                                            <NavLink className={componentClass} to='contact'>{t("navContact")}</NavLink>
                                            {location.pathname !== 'cabinet' && (
                                                <motion.li className='nav__li' >
                                                    {
                                                        isHomePage ? 
                                                        <Link className='cabinet' to='cabinet'>
                                                            <img src={cabinet_home_btn} alt="cabinet_btn" />
                                                        </Link>
                                                        : 
                                                        <Link className='cabinet' to='cabinet'>
                                                            <img src={cabinet_btn} alt="cabinet_btn" />
                                                        </Link>
                                                    }
                                                </motion.li>
                                            )}
                                            <Localisation/>
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