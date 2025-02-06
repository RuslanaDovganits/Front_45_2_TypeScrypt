// пример отдельного компонента кнопки
// экспорт по умолчанию перед обьявлением функции

import styles from "./myButton.module.css";
import cn from "classnames";

interface IMyButtonProps {
  // тип кнопки что бы показывать разные стили
  variant?: "primary" | "danger";
  // активная кнопка или нет
  disabled?: boolean;
  // не обязательные ключи
  text?: string;
  type?: "button" | "submit" | "reset";
  func?: () => void;
 
}

export default function MyButton({
  func = () => {},
  text = "click me",
  type = "submit",
  variant = "primary",
  disabled = false,
}: IMyButtonProps) {
  return (
    <button
      className={cn(styles.myButton, {
        [styles.primery]: variant === "primary",
        [styles.danger]: variant === "danger",
        [styles.disabled]: disabled === true,
      })}
      type={type}
      onClick={func}
    >
      {text}
    </button>
  );
}
