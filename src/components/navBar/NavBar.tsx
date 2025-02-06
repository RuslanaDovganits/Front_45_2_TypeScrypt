import { NavLink } from 'react-router-dom'
import styles from './navBar.module.css'

export default function NavBar(): JSX.Element {
  return (
   <nav className={styles.header}>
    <NavLink className={({isActive}) => isActive? styles.linkActive : ''} to={'/'}>homePage 🏡</NavLink>
    <NavLink className={({isActive}) => isActive? styles.linkActive : ''} to={'fetch-fox'}>fetch fox</NavLink>
   </nav>
  )
}
