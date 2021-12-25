import "./TodoCounter.css";

function TodoCounter({ total, completed }) {
  return (
    <div className="TodoCounter">
      <h1>Hey Catherine. Welcome back!!</h1>
      <h2>
        Has completado {completed} de {total} TODOs
      </h2>
    </div>
  );
}

export default TodoCounter;
