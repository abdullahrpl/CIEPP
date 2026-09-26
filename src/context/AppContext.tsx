import React, { createContext, useState } from 'react';
import { AppContextType, PageId } from '../types';

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [currentPage, setCurrentPage] = useState<PageId>('beranda');
    const [fontLarge, setFontLarge] = useState(false);
    const [highContrast, setHighContrast] = useState(false);

    return (
        <AppContext.Provider
            value={{
                currentPage,
                setCurrentPage,
                fontLarge,
                setFontLarge,
                highContrast,
                setHighContrast,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
