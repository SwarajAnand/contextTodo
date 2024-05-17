import { TodoProvider } from "./context/TodoContext";
import AddTodo from "./components/AddTodo";
import ShowTodo from "./components/ShowTodo";
import toast, { Toaster } from "react-hot-toast";
import Header from "./components/Header";

function App() {
  return (
    <TodoProvider>
      <Header />
      <AddTodo toast={toast} />
      <ShowTodo toast={toast}/>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 1500,
        }}
      />
    </TodoProvider>
  );
}

export default App;
