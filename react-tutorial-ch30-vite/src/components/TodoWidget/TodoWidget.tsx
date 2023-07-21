import {useState, ChangeEvent, FormEvent} from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoWidget() {
  const [todos, setTodos] = useState<string[]>([]);
  const [entry, setEntry] = useState<string>("");

  function handleEntryChange(event: ChangeEvent<HTMLInputElement>) {
    setEntry(event.target.value);
  }

  function handleFormSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    // add the new entry
    setTodos([...todos, entry]);
    
    // reset/empty the textbox
    setEntry("");
  }

  function handleClearTodos(): void {
    setTodos([]);
  }

  const myWidgetStyle = {
    display: 'flex',
    justifyContent: 'space-between',
 }

  return (
    <>
      <h2>Rendering Todo Widget</h2>
      <div style={myWidgetStyle}>
        <TodoForm entry={entry} onEntryChange={handleEntryChange} onFormSubmit={handleFormSubmit}/>
        <TodoList todos={todos}/>
      </div>
      <button onClick={handleClearTodos}>Clear Todos</button>
    </>
  )
}

export default TodoWidget;