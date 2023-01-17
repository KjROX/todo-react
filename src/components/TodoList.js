import Todo from "./Todo";
import classes from "./TodoList.module.css";
import TodoListFunctions from "./TodoListFunctions";
import { useState, useEffect } from "react";
// import { Draggable } from "react-drag-reorder";
const TodoList = ({ todos, todoCheckHandler, todoDeleteHandler }) => {
  const numberOfActiveTodos = todos.filter(
    (todo) => todo.isActive === true
  ).length;

  const [showTodos, setShowTodos] = useState(todos);

  useEffect(() => {
    setShowTodos(todos);
  }, [todos]);

  const displayTodoHandler = (type) => {
    if (type === "all") {
      setShowTodos(todos);
    } else if (type === "active") {
      setShowTodos(todos.filter((todo) => todo.isActive === true));
    } else {
      setShowTodos(todos.filter((todo) => todo.isActive === false));
    }
  };

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.todos}>
          {showTodos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              todoCheckHandler={todoCheckHandler}
              todoDeleteHandler={todoDeleteHandler}
            />
          ))}

          <div className={classes.todoListInfo}>
            {todos.length !== 0 ? (
              <>
                <span>
                  {numberOfActiveTodos}
                  {numberOfActiveTodos > 1 ? " items " : " item "}
                  left
                </span>
                <TodoListFunctions
                  design="web"
                  displayTodoHandler={displayTodoHandler}
                  todos={todos}
                />
                <button>Clear Completed</button>
              </>
            ) : (
              <span className={classes.nothingTodo}>
                You have nothing to do
              </span>
            )}
          </div>
        </div>
        {todos.length !== 0 && (
          <TodoListFunctions
            design="mobile"
            displayTodoHandler={displayTodoHandler}
            todos={todos}
          />
        )}
      </div>
      {todos.length !== 0 && (
        <span className={classes.dragAndDrop}>
          Drag and drop to reorder list
        </span>
      )}
    </div>
  );
};
export default TodoList;
