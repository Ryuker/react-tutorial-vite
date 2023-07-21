interface ListProps {
  todos: string[]
}

function TodoList({todos}: ListProps ) {
  return (
    <>
      <div>
        <h3>Rendering Todo List</h3>
        <ul>
          {todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
      </div>
    </>
  )
}

export default TodoList;