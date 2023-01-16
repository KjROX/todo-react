import classes from "./TodoListFunctions.module.css";
const TodoListFunctions = ({ design, displayTodoHandler, showTodos }) => {
  return (
    <div
      className={
        design === "mobile"
          ? classes.todoListFunctionsMobile
          : classes.todoListFunctionsWeb
      }
    >
      <button
        onClick={() => {
          displayTodoHandler("all");
        }}
      >
        All
      </button>
      <button
        disabled={
          showTodos.filter((todo) => todo.isActive === true).length === 0
        }
        onClick={() => {
          displayTodoHandler("active");
        }}
      >
        Active
      </button>
      <button
        disabled={
          showTodos.filter((todo) => todo.isActive === false).length === 0
        }
        onClick={() => {
          displayTodoHandler("completed");
        }}
      >
        Completed
      </button>
    </div>
  );
};
export default TodoListFunctions;
