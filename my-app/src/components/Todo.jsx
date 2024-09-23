const Todo = (props) => {
  return (
    <div style={{ border: "2px solid white", padding: "10px", marginBottom: "20px" }}>
      {/* Om todo är utförd, ändra textens färg till grön */}
      <h3 style={{ color: props.completed ? 'green' : 'black' }}>
        {props.title}
      </h3>

      {/* Visa beskrivning och markera som klar om todo ej är utförd */}
      {!props.completed && (
        <>
          <p>{props.description}</p>
          <button onClick={() => props.completeTodo(props.id)} style={{ marginRight: '10px' }}>
            Mark as Completed
          </button>
        </>
      )}

      {/* Knapp för att ta bort todo */}
      <button onClick={() => props.removeTodo(props.id)} style={{ backgroundColor: 'red', color: 'white' }}>
        Remove Todo
      </button>
    </div>
  );
};

export default Todo;
