import Todo from "./Todo";
import classes from "./TodoList.module.css";
import TodoListFunctions from "./TodoListFunctions";
const TodoList = ({ todos, todoCheckHandler, todoDeleteHandler }) => {
  const numberOfActiveTodos = todos.filter(
    (todo) => todo.isActive === true
  ).length;
  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <div className={classes.todos}>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              todoCheckHandler={todoCheckHandler}
              todoDeleteHandler={todoDeleteHandler}
            />
          ))}
          <div className={classes.todoListInfo}>
            {todos.length !== 0 ? (
              <>
                <span>
                  {numberOfActiveTodos}
                  {numberOfActiveTodos > 1 ? " items " : " item "}
                  left
                </span>
                <TodoListFunctions design="web" />
                <button>Clear Completed</button>
              </>
            ) : (
              <span className={classes.nothingTodo}>
                You have nothing to do
              </span>
            )}
          </div>
        </div>
        {todos.length !== 0 && <TodoListFunctions design="mobile" />}
      </div>
      {todos.length !== 0 && (
        <span className={classes.dragAndDrop}>
          Drag and drop to reorder list
        </span>
      )}
    </div>
  );
};
export default TodoList;
