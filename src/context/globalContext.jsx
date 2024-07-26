import { createContext, useContext, useState } from "react";


export const DataContext = createContext()

export const DataProvider = ({children})=>{
   

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    return (<DataContext.Provider value={{
        searchTerm,
        setSearchTerm,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        
    }}>
        {children}
    </DataContext.Provider>)

}



export const useDataContext = () => useContext(DataContext);