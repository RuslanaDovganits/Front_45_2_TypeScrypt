import style from "./SpaceMission.module.css";
export default function SpaceMission() {
  let shipName: string = "Space X";
  let crewCount: number = 3;
  // let missionStart: boolean = true;
  let crewNames: string[] = ["Donalt Trump", "Melania Tramp", "Barron Tramp"];
  let captain: readonly [string, number] = ["Elon Musk", 50];

  function startMission(a: string): string {
    return `Миссия ${shipName} началась!`;
  }

  return (
    <div className={style.container}>
      <h2 className={style.title}>Название миссии: {shipName}</h2>
      <p className={style.subtitle}>
        Капитан: {captain[0]} 🤖, {captain[1]} лет
      </p>
      <p className={style.subtitle}>Экипаж: {crewCount} человека</p>
      <p> Список челенов экипажа:</p>
      <ul className={style.crewList}>
        {crewNames.map((name) => (
          <li className={style.crewItem} key={name}>
            {name}
          </li>
        ))}
      </ul>
      <p>{startMission(shipName)} 🚀 </p>
    </div>
  );
}
