import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.titleBackground}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>TODO</h1>
          <button>
            <img src="./images/icon-moon.svg" alt="moon" />
          </button>
        </div>
        <form className={classes.form}>
          <div className={classes.inputCheckBox}>
            <input type="checkbox" />
          </div>
          <input
            type="text"
            placeholder="Create a new todo..."
            className={classes.input}
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
