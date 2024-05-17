import { createContext, useState, useEffect  } from "react";
import PropTypes from 'prop-types';
// import useLocalStorageState from "../utlity/useLocalStorag";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []); 

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoContext.Provider value={{todos, setTodos}}>
            {children}
        </TodoContext.Provider>
    )
}


TodoProvider.propTypes = {
    children: PropTypes.node.isRequired
}
