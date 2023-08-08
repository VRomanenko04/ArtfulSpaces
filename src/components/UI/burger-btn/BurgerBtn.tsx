import { MouseEvent } from 'react';
import classes from './_burger-btn.module.scss';

type Props = {
    isOpen: boolean,
    handleMenu: (event: MouseEvent<HTMLDivElement>) => void
}

const BurgerBtn = ({isOpen, handleMenu}: Props) => {
    return (
        <div className={classes.burger__btn} onClick={handleMenu}>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stop-color="#2AF598" />
                        <stop offset="100%" stop-color="#009EFD" />
                    </linearGradient>
                </defs>
                <g id="Menu / Menu_Alt_01">
                <path id="Vector" d="M12 17H19M5 12H19M5 7H19" stroke={isOpen ? '#ffffff' : 'url(#gradient)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </g>
            </svg>
        </div>
    )
}

export default BurgerBtn