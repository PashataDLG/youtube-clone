import React, { createContext, ReactNode } from 'react';

interface IAppContextValue {
    theme: 'light' | 'dark';
}

const AppContext = createContext<IAppContextValue | null>(null);

export const useAppContext = () => {
    const appContext = React.useContext(AppContext);
    if (!appContext) {
        throw new Error('useAppContext must be used within an AppContextProvider');
    };

    return appContext
};

interface IAppContextProviderProps {
    children: ReactNode
}

export const AppContextProvider = ({ children }: IAppContextProviderProps) => {

    const [theme, setTheme] = React.useState<'light' | 'dark'>('dark');

    const value = {
        theme,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
};