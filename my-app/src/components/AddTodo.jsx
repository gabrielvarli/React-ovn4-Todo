import { useState } from 'react';

const AddTodo = (props) => {
  // State för titel och beskrivning
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // Kolla att både titel och beskrivning är ifyllda
    if (title && description) {
      // Skicka titel och beskrivning till addTodo funktionen som prop
      props.addTodo(title, description);
      
      // Töm input-fälten efter att todo är tillagd
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <label htmlFor="todoTitle">Todo titel:</label>
      <input
        type="text"
        id="todoTitle"
        value={title} // Koppla värdet till state
        onChange={(e) => setTitle(e.target.value)} // Uppdatera state när användaren skriver
      />

      <label htmlFor="todoDesc">Todo beskrivning:</label>
      <input
        type="text"
        id="todoDesc"
        value={description} // Koppla värdet till state
        onChange={(e) => setDescription(e.target.value)} // Uppdatera state när användaren skriver
      />
      <br />
      <button onClick={handleSubmit}>Add todo!</button>
    </div>
  );
};

export default AddTodo;
