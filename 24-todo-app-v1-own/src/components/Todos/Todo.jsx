import styles from './Todo.module.css';

function Todo({ value, dataKey }) {
  return (
    <li className={styles.todo} data-key={dataKey}>
      {value}
    </li>
  );
}

export default Todo;
