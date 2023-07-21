import {ChangeEventHandler, FormEventHandler} from 'react';

interface FormProps {
  entry: string;
  onEntryChange: ChangeEventHandler<HTMLInputElement>;
  onFormSubmit: FormEventHandler<HTMLFormElement>;
}


function TodoForm({entry, onEntryChange, onFormSubmit}: FormProps)  {
  return (
    <>
      <div>
      <h3>Rendering Todo Form</h3>
        <form onSubmit={onFormSubmit}>
          <label htmlFor="todo"></label>
          <input type="text" id="todo" value={entry} onChange={onEntryChange}></input>
          <p>{entry}</p>
          <input type="submit" value="Add todo"/>
        </form>
      </div>
    </>
  )
}

export default TodoForm;