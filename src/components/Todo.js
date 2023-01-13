import classes from "./Todo.module.css";

const Todo = () => {
  return (
    <div className={classes.todo}>
      <div className={classes.inputLabel}>
        <input type="checkbox" />
        <label>Jog around the park 3times</label>
      </div>
      <button>
        <img src="./images/icon-cross.svg" alt="" />
      </button>
    </div>
  );
};
export default Todo;
