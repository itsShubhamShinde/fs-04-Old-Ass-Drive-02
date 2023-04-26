import { createContext, useState } from "react";

export const myContext = createContext();

const DataProvider = ({children}) =>{
    const [list,setList] = useState([]);
    return (
        <myContext.Provider value={{list, setList}}>
            {children}
        </myContext.Provider>
    )
}
export default DataProvider;