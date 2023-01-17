import classes from "./Todo.module.css";

const Todo = ({ todo, todoCheckHandler, todoDeleteHandler }) => {
  const checkBoxClickHandler = () => {
    todoCheckHandler(todo.id, !todo.isActive);
  };

  const crossButtonHandler = () => {
    todoDeleteHandler(todo.id);
  };

  return (
    <div className={classes.todo}>
      <div className={classes.inputLabel}>
        <div>
          <input
            type="checkbox"
            onChange={checkBoxClickHandler}
            checked={todo.isActive === false}
          />
        </div>
        <label
          className={`${classes.todoLabel} ${
            !todo.isActive ? classes.lineThrough : ""
          }`}
        >
          {todo.content}
        </label>
      </div>
      <button onClick={crossButtonHandler}>
        <img
          style={{ cursor: "pointer" }}
          src="./images/icon-cross.svg"
          alt=""
        />
      </button>
    </div>
  );
};
export default Todo;
