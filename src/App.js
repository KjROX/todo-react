import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(
    localStorage.getItem("localTodos")
      ? JSON.parse(localStorage.getItem("localTodos"))
      : []
  );
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const themeChanger = () => {
    if (theme === "darkMode") {
      setTheme("lightMode");
      localStorage.setItem("theme", "lightMode");
    } else {
      setTheme("darkMode");
      localStorage.setItem("theme", "darkMode");
    }
  };

  useEffect(() => {
    localStorage.setItem("localTodos", JSON.stringify(todos));
  }, [todos]);

  const todoAddingHandler = (newTodo) => {
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  const todoCheckHandler = (todoId, value) => {
    setTodos((prevTodos) => {
      const prevTodosInstance = [...prevTodos];
      const indexOfTodo = prevTodosInstance.findIndex(
        (todo) => todo.id === todoId
      );
      prevTodosInstance[indexOfTodo].isActive = value;
      return prevTodosInstance;
    });
  };

  const todoDeleteHandler = (todoId) => {
    setTodos((prevTodos) => {
      const prevTodosInstance = [...prevTodos];
      const indexOfTodo = prevTodosInstance.findIndex(
        (todo) => todo.id === todoId
      );
      prevTodosInstance.splice(indexOfTodo, 1);
      return prevTodosInstance;
    });
  };

  return (
    <div className={`App ${theme === "darkMode" ? "dark-theme" : ""}`}>
      <Header
        todoAddingHandler={todoAddingHandler}
        themeChanger={themeChanger}
        theme={theme}
      />
      <TodoList
        todos={todos}
        todoCheckHandler={todoCheckHandler}
        todoDeleteHandler={todoDeleteHandler}
      />
    </div>
  );
}

export default App;
