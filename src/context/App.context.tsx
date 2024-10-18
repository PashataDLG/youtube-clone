import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';
import { ITranslations, LANGUAGE } from '../utils/translations';
import { createClient } from 'pexels';
import { PEXELES_API } from '../utils/pexels';

interface IAppContextValue {
    theme: 'light' | 'dark';
    language: 'english' | 'french';
    toggleTheme: () => void;
    toggleLanguage: () => void;
    text: ITranslations;
    searchBarText: string;
    setSearchBarText: Dispatch<SetStateAction<string>>;
    isMenuSmall: boolean;
    toggleMenuSize: () => void;
    activeMenuText: string;
    activeCategory: string;
    setActiveCategory: Dispatch<SetStateAction<string>>;
}

const AppContext = createContext<IAppContextValue | null>(null);

const client = createClient(PEXELES_API);

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
    const [isMenuSmall, setIsMenuSmall] = useState<boolean>(false);
    const [activeMenuText, setActiveMenuText] = useState<string>('home');
    const [activeCategory, setActiveCategory] = useState<string>('All');

    useEffect(() => {
        fetchVideos(activeCategory)
    }, [activeCategory]);

    const fetchVideos = async (query: string) => {
        try {
            const response = await client.videos.search({
                query,
                per_page: 44,
            });

            console.log("response - " + response);
        } catch (error) {
            console.log('there was an error fetching videos' + error);
        }
    };

    const toggleTheme = (): void => {
        setTheme((currTheme) => currTheme === 'light' ? 'dark' : 'light');
    };

    const toggleLanguage = (): void => {
        setLanguage((currLanguage) => currLanguage === 'english' ? 'french' : 'english');
    };

    const toggleMenuSize = (): void => {
        setIsMenuSmall((currState) => !currState);
    };

    const values = {
        theme,
        language,
        toggleTheme,
        toggleLanguage,
        text: LANGUAGE[language],
        searchBarText,
        setSearchBarText,
        isMenuSmall,
        toggleMenuSize,
        activeMenuText,
        activeCategory,
        setActiveCategory
    };

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
};