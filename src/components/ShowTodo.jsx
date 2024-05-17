import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import EditTodo from "./EditTodo";
import propType from "prop-types";

const ShowTodo = ({toast}) => {
  const { todos, setTodos } = useContext(TodoContext);
  console.log("Working");

  const handleCheckbox = (id) => {
    setTodos(
      todos.map((ele) =>
        ele.id === id ? { ...ele, completed: !ele.completed } : ele
      )
    );
  };

  const editTodoTask = (id, input) => {
    setTodos(
      todos.map((ele) => (ele.id === id ? { ...ele, task: input } : ele))
    );

    toast('Edited Successfully', {
      icon: '👏',
    });
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((ele) => ele.id !== id));
    toast.error("Deleted Successfully")
  };
  
  return (
    <div>
      {todos.map((ele) => (
        <EditTodo
          ele={ele}
          deleteTodo={deleteTodo}
          editTodoTask={editTodoTask}
          handleCheckbox={handleCheckbox}
          key={ele.id}
        />
      ))}
    </div>
  );
};

ShowTodo.propTypes = {
  toast: propType.func,
}

export default ShowTodo;
