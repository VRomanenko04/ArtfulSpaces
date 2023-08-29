import React, { ReactNode } from 'react';
import './_popup.scss';

interface IModal {
    active: boolean
    setActive: any
    children: ReactNode
}

const Popup = ({active, setActive, children}: IModal) => {

    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Popup;