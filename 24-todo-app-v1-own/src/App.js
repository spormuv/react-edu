import { useState } from 'react';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import { nanoid } from 'nanoid';
import './App.css';

function App() {
  const [listItems, setListItems] = useState([]);

  function addListItem(val) {
    if (!val) return;
    const item = { key: nanoid(), value: val };
    setListItems([...listItems, item]);
  }

  function removeListItem(e) {
    const res = listItems.filter(
      item => item.key !== e.target.getAttribute('data-key')
    );
    setListItems(res);
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addList={addListItem} />
      {listItems.length ? (
        <TodoList {...{ listItems, removeListItem }} />
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  );
}

export default App;
