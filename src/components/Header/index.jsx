import Logo from '../../assets/nuKenzie.svg'
import styles from './style.module.scss'
export const Header = () => {
    return(
        <header className={styles.header}>
            <img className={styles.img} src={Logo} alt="Logo da NuKenzie" />

        </header>
    )
}