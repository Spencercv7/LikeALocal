import React, { createContext, useState} from 'react'

export const ListContext = createContext();

const ListContextProvider = (props) => {
    const [list, setList] = useState([
        {name: 'Pickles'},
        {name: 'Broccoli'},
        {name: 'Hamburger'}
    ])
    return (  
        <ListContext.Provider value={{list}}>
            {props.children}
        </ListContext.Provider>
    );
}
 
export default ListContextProvider;