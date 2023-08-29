import React, { ReactNode } from 'react';
import classes from './_popup.module.scss';

interface IModal {
    active: boolean
    setActive: React.Dispatch<React.SetStateAction<boolean>>
    children: ReactNode
}

const Popup = ({active, setActive, children}: IModal) => {

    return (
        <div className={`${classes.modal} ${active ? classes.active : ''}`} onClick={() => setActive(false)}>
            <div className={`${classes.modal__content} ${active ? classes.active : ''}`} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Popup;