import React, {useEffect, useState} from 'react';
import classes from './_localisation.module.scss';
import { useTranslation } from 'react-i18next';


const Localisation: React.FC = () => {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState('');

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setSelectedLanguage(lng);
    }

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        changeLanguage(selectedLanguage);
    }

    useEffect(() => {
        const savedLanguage = localStorage.getItem('i18nextLng');
        if (savedLanguage) {
            setSelectedLanguage(savedLanguage); 
            changeLanguage(savedLanguage); 
        }
    }, [])

    return (
        <select className={classes.selector} onChange={handleLanguageChange} value={selectedLanguage}>
            <option value="en">EN</option>
            <option value="ua">UA</option>
        </select>
    )
}

export default Localisation;