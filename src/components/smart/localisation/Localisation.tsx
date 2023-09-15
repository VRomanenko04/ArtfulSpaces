import React from 'react';
import classes from './_localisation.module.scss';
import { useTranslation } from 'react-i18next';


const Localisation: React.FC = () => {
    const { i18n } = useTranslation()

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    }

    return (
        <div>
            <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('ua')}>UA</button>
        </div>
    )
}

export default Localisation;