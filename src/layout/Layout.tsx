import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import NavBar from "../components/navBar/NavBar";
import NavFooter from "../components/navFooter/NavFooter";

export default function Layout() {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <h5 className={styles.virtual_home}>Welcome to Ruslana´s virtual home!</h5>
        <Outlet />
      </main>
      <NavFooter />
    </>
  );
}
