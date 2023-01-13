import Todo from "./Todo";
import classes from "./TodoList.module.css";
const TodoList = () => {
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.todos}>
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <Todo />
          <div className={classes.todoListInfo}>
            <span>5 items left</span>
            <button>Clear Completed</button>
          </div>
        </div>
        <div className={classes.todoListFunctions}>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div>
      <span className={classes.dragAndDrop}>Drag and drop to reorder list</span>
    </div>
  );
};
export default TodoList;
