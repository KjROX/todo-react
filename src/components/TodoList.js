import Todo from "./Todo";
import classes from "./TodoList.module.css";
import TodoListFunctions from "./TodoListFunctions";
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
            <TodoListFunctions design="web" />
            <button>Clear Completed</button>
          </div>
        </div>
        <TodoListFunctions design="mobile" />
      </div>
      <span className={classes.dragAndDrop}>Drag and drop to reorder list</span>
    </div>
  );
};
export default TodoList;
