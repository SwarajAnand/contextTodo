import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { v4 as uuidv4 } from 'uuid';
import propType from "prop-types";

const AddTodo = ({toast}) => {
    const { todos, setTodos } = useContext(TodoContext);
    const [input, setInput] = useState("");

    const createTodo = () => {
        if(!input || input.trim() === ""){
            toast.error("Enter a valid Todo")
            return
        }
        setTodos([...todos, { id: uuidv4(), task: input, completed: false }])
        toast.success("Todo Created");
    }
    return (
        <div className="addTodo">
        <input  value={input} onChange={(e) => setInput(e.target.value)}/>
        <button className="button-59 addBtn" onClick={() => {
            setInput("")
            createTodo()
        }}>ADD TODO</button>
        <button className="button-59 plusBtn" onClick={() => {
            setInput("")
            createTodo()
        }}>+</button>
        </div>
    )
}

AddTodo.propTypes = {
    toast: propType.func,
}



export default AddTodo;