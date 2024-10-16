import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { ITranslations, LANGUAGE } from '../utils/translations';

interface IAppContextValue {
    theme: 'light' | 'dark';
    language: 'english' | 'french';
    toggleTheme: () => void;
    toggleLanguage: () => void;
    text: ITranslations;
    searchBarText: string;
    setSearchBarText: Dispatch<SetStateAction<string>>;
}

const AppContext = createContext<IAppContextValue | null>(null);

export const useAppContext = () => {
    const appContext = useContext(AppContext);
    if (!appContext) {
        throw new Error('useAppContext must be used within an AppContextProvider');
    };

    return appContext
};

interface IAppContextProviderProps {
    children: ReactNode
}

export const AppContextProvider = ({ children }: IAppContextProviderProps) => {

    const [theme, setTheme] = useState<'light' | 'dark'>('dark'); 
    const [language, setLanguage] = useState<'english' | 'french'>('english');
    const [searchBarText, setSearchBarText] = useState<string>('');

    const toggleTheme = (): void => {
        setTheme((currTheme) => currTheme === 'light' ? 'dark' : 'light');
    };

    const toggleLanguage = (): void => {
        setLanguage((currLanguage) => currLanguage === 'english' ? 'french' : 'english');
    };

    const values = {
        theme,
        language,
        toggleTheme,
        toggleLanguage,
        text: LANGUAGE[language],
        searchBarText,
        setSearchBarText
    };

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
};