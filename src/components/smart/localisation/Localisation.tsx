import React, {useEffect, useState} from 'react';
import classes from './_localisation.module.scss';
import { useTranslation } from 'react-i18next';


const Localisation: React.FC = () => {
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState<string>('');

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        setSelectedLanguage(lng);
        sessionStorage.setItem('selectedLanguage', lng);
    }

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedLanguage = event.target.value;
        changeLanguage(selectedLanguage);
    }

    useEffect(() => {
        const savedLanguage = sessionStorage.getItem('selectedLanguage');
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