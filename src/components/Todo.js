import classes from "./Todo.module.css";

const Todo = () => {
  return (
    <div className={classes.todo}>
      <div className={classes.inputLabel}>
        <div>
          <input type="checkbox" />
        </div>
        <label>Jog around the park</label>
      </div>
      <button>
        <img src="./images/icon-cross.svg" alt="" />
      </button>
    </div>
  );
};
export default Todo;
