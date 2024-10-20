import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';
import { ITranslations, LANGUAGE } from '../utils/translations';
import { useFetchVideos } from '../hooks/useFetchVideos';
import { Video } from 'pexels';

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
    videos: VideoApiResponse;
}

interface VideoFile {
    id: number;
    quality: string;
    file_type: string;
    width: number;
    height: number;
    fps: number;
    link: string;
    size: number;
}

interface VideoPicture {
    id: number;
    nr: number;
    picture: string;
}

// export interface Video {
//     id: number;
//     width: number;
//     height: number;
//     duration: number;
//     full_res: null | string;
//     tags: string[];
//     url: string;
//     image: string;
//     avg_color: null | string;
//     user: {
//         id: number;
//         name: string;
//         url: string;
//     };
//     video_files: VideoFile[];
//     video_pictures: VideoPicture[];
// }

export interface VideoApiResponse {
    page: number;
    per_page: number;
    videos: Video[];
    total_results: number;
    next_page: string;
    url: string;
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
    const [isMenuSmall, setIsMenuSmall] = useState<boolean>(false);
    const [activeMenuText] = useState<string>('home');
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const [videos, setVideos] = useState<VideoApiResponse>({
        page: 0,
        per_page: 0,
        videos: [],
        total_results: 0,
        next_page: '',
        url: '',
    });

    useFetchVideos(activeCategory, setVideos);

    useFetchVideos(searchBarText, setVideos);

    console.log(videos);

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
        setActiveCategory,
        videos
    };

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
};