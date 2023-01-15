import classes from "./TodoListFunctions.module.css";
const TodoListFunctions = ({ design, displayTodoHandler }) => {
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
        onClick={() => {
          displayTodoHandler("active");
        }}
      >
        Active
      </button>
      <button
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
