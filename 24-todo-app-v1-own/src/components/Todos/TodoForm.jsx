import { useState } from 'react';
import Button from '../UI/Button';
import styles from './TodoForm.module.css';

function TodoForm({ addList }) {
  const [inputValue, setInputValue] = useState('');

  const addItemHandler = text => {
    addList(text);
    setInputValue('');
  };

  return (
    <form
      className={styles.todoForm}
      onSubmit={e => {
        e.preventDefault();
        addItemHandler(inputValue);
      }}
    >
      <input
        className={styles.formInput}
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Enter new todo"
      />
      <Button />
    </form>
  );
}

export default TodoForm;
