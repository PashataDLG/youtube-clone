import { createContext, ReactNode, useContext, useState } from 'react';

interface IAppContextValue {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
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

    const toggleTheme = (): void => {
        setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light');
    };

    const values = {
        theme,
        toggleTheme
    };

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
};