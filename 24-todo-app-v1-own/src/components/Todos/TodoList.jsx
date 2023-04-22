import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ listItems, removeListItem }) {
  const res = listItems.map(item => (
    <Todo key={item.key} value={item.value} dataKey={item.key} />
  ));

  return (
    <ul className={styles.todoList} onDoubleClick={e => removeListItem(e)}>
      {res}
    </ul>
  );
}

export default TodoList;
