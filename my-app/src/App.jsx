import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';

function App() {
  let data = [
    { title: "Rensa datorn", description: "Ta bort gamla filer och organisera mappar", completed: false, id: 1 },
    { title: "Köpa presenter", description: "Köp födelsedagspresenter till Anna", completed: false, id: 2 },
    { title: "Skriva CV", description: "Uppdatera och skriv ut mitt CV", completed: true, id: 3 },
    { title: "Springa 5 km", description: "Springa en runda i parken", completed: false, id: 4 },
    { title: "Laga middag", description: "Förbered lasagne till familjen", completed: true, id: 5 },
    { title: "Träna yoga", description: "Genomför ett 30 minuters yogapass", completed: false, id: 6 },
    { title: "Plantera blommor", description: "Plantera nya blommor på balkongen", completed: false, id: 7 },
    { title: "Läsa tidningen", description: "Läs dagens nyheter och håll dig uppdaterad", completed: true, id: 8 },
    { title: "Tvätta bilen", description: "Tvätta bilen och dammsuga insidan", completed: false, id: 9 },
    { title: "Baka kakor", description: "Baka kakor till helgens fika", completed: true, id: 10 }
  ];
  

  const [todos, setTodos] = useState(data);

  // Funktion för att lägga till en todo
  let addTodo = (title, description) => {
    let newTodo = {
      title,
      description,
      completed: false,
      id: todos.length + 1
    };
    setTodos([...todos, newTodo]);
  };

  // Funktion för att markera en todo som completed
  const completeTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  // Funktion för att ta bort en todo
  const removeTodo = (id) => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <AddTodo addTodo={addTodo} />
        {/* Vi loopar ut samtliga todos med dess data + skapar ett id */}
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
            completed={todo.completed}
            completeTodo={completeTodo}
            removeTodo={removeTodo} // Skickar removeTodo funktionen till varje Todo
            id={todo.id}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
