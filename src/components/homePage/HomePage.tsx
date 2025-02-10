import { NavLink } from "react-router-dom";
import styles from "./homePage.module.css";


export default function HomePage() {
  return (
    <>
    <div className={styles.bigContainer}>
      <div className={styles.lessonContainer}>
      <NavLink to={"lesson01"}>lesson 01</NavLink>
      <NavLink to={"lesson02"}>lesson 02</NavLink>
      <NavLink to={"lesson03"}>lesson 03</NavLink>
      <NavLink to={"lesson04"}>lesson 04</NavLink>
      <NavLink to={"lesson05"}>lesson 05</NavLink>
      <NavLink to={"lesson06"}>lesson 06</NavLink>
      <NavLink to={"lesson07"}>lesson 07</NavLink>
      <NavLink to={"lesson08"}>lesson 08</NavLink>
      <NavLink to={"lesson09"}>lesson 09</NavLink>
      <NavLink to={"lesson11"}>lesson 11</NavLink>


      </div>
      <div className={styles.lessonContainer}>
        <NavLink to={"homework01"}>homework 01</NavLink>
        <NavLink to={"homework02"}>homework 02</NavLink>
        <NavLink to={"homework03"}>homework 03</NavLink>
        <NavLink to={"homework04"}>homework 04</NavLink>
        <NavLink to={"homework05"}>homework 05</NavLink>
        <NavLink to={"homework06"}>homework 06</NavLink>
      </div>
      </div>
    </>
  );
}
