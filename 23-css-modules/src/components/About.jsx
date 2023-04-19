import './About.css';
import styles from './About.module.css';

function About() {
  return (
    <div className="about">
      <h1>About module</h1>
      <p className={styles.aboutText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, non!
        Explicabo, nam optio deleniti odit magni, perspiciatis ipsa modi aperiam
        obcaecati dolor consectetur saepe cupiditate voluptatibus amet itaque
        earum nobis.
      </p>
      <button className={styles.aboutBtn}>Click from About module</button>
    </div>
  );
}

export default About;
