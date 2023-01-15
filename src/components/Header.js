import classes from "./Header.module.css";
import { useState } from "react";
const Header = ({ todoAddingHandler, theme, themeChanger }) => {
  const [inputValue, setInputValue] = useState("");

  const todoSubmitHandler = (e) => {
    e.preventDefault();
    if (inputValue.length === 0) {
      return;
    }
    const generatedTodo = {
      id: crypto.randomUUID(),
      content: inputValue,
      isActive: true,
    };
    todoAddingHandler(generatedTodo);
    setInputValue("");
  };

  return (
    <div className={classes.titleBackground}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h1>TODO</h1>
          <button
            onClick={() => {
              themeChanger();
            }}
          >
            <img
              src={
                theme === "darkMode"
                  ? "./images/icon-sun.svg"
                  : "./images/icon-moon.svg"
              }
              alt={theme === "darkMode" ? "sun" : "moon"}
            />
          </button>
        </div>
        <form className={classes.form} onSubmit={todoSubmitHandler}>
          <div className={classes.inputCheckBox}>
            <input type="checkbox" />
          </div>
          <input
            type="text"
            placeholder="Create a new todo..."
            className={classes.input}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Header;
