import { useEffect } from "react";
import { fellowship } from "./fellowship";
import "./lesson05.css";

export default function Lesson05() {

  useEffect(() => {
console.log('lesson mount!')
  }, [])
  fellowship.map((character) => {
    console.log(character.name);
  });

  

  return (
    <div>
      <h2>React map() components 🧝‍♀️</h2>
      {fellowship.map((hero, index) => (
        // key - это уникальное значение которое просит передать react в итерируемую верстку для того чтобы не ошибиться в отрисовки при сложных операциях (сортировка / удаление)
        <div className="heroCard" key={index}>
          <p>Hero: {hero.name}</p>
          <p>{hero.isDark ? "Villain 🔥" : "Hero ✨"}</p>
          <p>{hero.age} years old</p>
          <img height={200} src={hero.image} alt="" />
          {hero.weapons[0] ? (
            <p>Weapons {hero.weapons.map((el) => "|" + el)} </p>
          ) : (
            <p>No weapons</p>
          )}
        </div>
      ))}
    </div>
  );
}

//  1* key - уникальное значение которое просит react передать в итерируемую верстку для того что бы
// не ошибится в отрисовки при сложных операциях(сортировка удаление)
