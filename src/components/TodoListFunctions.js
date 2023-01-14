import classes from "./TodoListFunctions.module.css";
const TodoListFunctions = ({ design }) => {
  return (
    <div
      className={
        design === "mobile"
          ? classes.todoListFunctionsMobile
          : classes.todoListFunctionsWeb
      }
    >
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
};
export default TodoListFunctions;
