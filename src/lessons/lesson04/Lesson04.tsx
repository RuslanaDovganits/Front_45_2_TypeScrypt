// * в первой трети компонента происходят импорты из других файлов + работа с неизменяемыми данными

import { useState } from "react";
import "./lesson04.css";
function Lesson04() {
  // * в второй трети - теле функции мы работаем с изменяемыми данными
  // * здесь вызываются функции, происходят асинхронные запросы
  // * вызываются специальные методы внутри react
  // ! код ниже сработал бы в обычном script.js но не обновляет данные на странице в react

  // let count = 1

  // const handlePlus = () => {
  //  count++
  //  console.log(count)
  // }

  // ! вместо него мы воспользуемся функцией useState()
  // * в useState мы передаем начальное значение для переменной
  // * в ответ получаем массив из двух элементов:
  // * 1. переменной состояния
  // * 2. функции, которой мы это переменную перезаписывают
  // const result = useState(1)

  // * для удобства данные забирем из массива через деструктуризацию
  const [count, setCount] = useState<number>(1);

  const handlePlus = (): void => {
    // с помощью функции прилагающейся к переменной изменяем ее добавив к предыдущему состоянию 1
    setCount((prev) => prev + 1);
  };

  const handleMinus = ():void => {
    setCount((prev) => prev - 1);
  };

  // ? потренируемся работать с переменными состояния

  const [isVisible, setIsVisible] = useState<boolean>(false);

  // реализуем переключатель для того что бы прятать и показывать нас счетчик

  const handleSwitcher = ():void => {
    // меняем знаение на противоположное
    setIsVisible((prev) => !prev);
    // console.log(isVisible);
  };

  const [color, setColor] = useState("yellow");
const handleColor = (element:string) => {
    setColor(element);
    // console.log(color);
}



  return (
    // * в последней трети - после return мы показываем верстку и отображаем данные в тегах
    <div>
      <h2>UseState() hook 🪝</h2>
      <p>
        Чтобы при изменении переменной, как в примере ниже мы видели результат и
        компонент обновился - не достаточно обычной переменной 🫣
      </p>
      <p>
        Нужно использовать специальную переменную состояния из встроенной в
        React функции useState()
      </p>
      <div>
        <button onClick={handleSwitcher}>
          ✨ {!isVisible ? "show" : "hide"} counter ✨
        </button>
      </div>
      {/*  если в переменной isVisible будет true - отобрази данные после &&  (двойного амперсанта)*/}
      {isVisible && (
        <div className="counter" style={{backgroundColor: color}}>
          <p>React Counter with useState hook</p>
          <button onClick={handleMinus}>-</button>
          <span>{count}</span>
          <button onClick={handlePlus}>+</button>
        </div>
      )}
      <div>
        <button onClick={()=> handleColor("green")}>green</button>
        <button onClick={()=> handleColor("blue")}>blue</button>
        <button onClick={()=> handleColor("red")}>red</button>
      </div>
    </div>
  );
}

// добавить 3 кнопки  red green blue
// сделайте так что бы по ножатию на разные кнопки менялся цвет counter контейнера

export default Lesson04;
