import React, { createContext, useContext, useState } from 'react';

const PageContext = createContext();

export const PageProvider = ({ children }) => {
    const [pageDisplayed, setPageDisplayed] = useState('Home');
    return(
        <PageContext.Provider value={[pageDisplayed, setPageDisplayed]}>
            {children}
        </PageContext.Provider>
    );
};

export const usePage = () => useContext(PageContext)