import classes from "./TodoListFunctions.module.css";
const TodoListFunctions = ({ design, displayTodoHandler, todos }) => {
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
        disabled={todos.every((todo) => todo.isActive !== true)}
        onClick={() => {
          displayTodoHandler("active");
        }}
      >
        Active
      </button>
      <button
        disabled={todos.every((todo) => todo.isActive === true)}
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
