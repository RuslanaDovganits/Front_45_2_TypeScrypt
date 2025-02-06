import MyButton from "../../components/myButtons/MyButton";
import styles from "./lesson09.module.css";

export default function Lesson09() {
  return (
    <div>
      <h1 className={styles.heading}>Lesson 09: CSS modules 🎨 </h1>
      <p className={`${styles.textGreen} ${styles.desc}`}>
        CSS модули - это технология, c помощью которой мы можем изолировать со
        стилями{" "}
      </p>

      <MyButton variant="danger" text="danger" />
      <MyButton disabled={true} text="disabled" />
      <MyButton text="primery" />

      <p>Задачу добавления нескольких классов можно решить так:</p>
      <ul className={styles.list}>
        <li>Конкатенация</li>
        <li>Шаблонная строка</li>
        <li>Библиотека classnames</li>
      </ul>
    </div>
  );
}
