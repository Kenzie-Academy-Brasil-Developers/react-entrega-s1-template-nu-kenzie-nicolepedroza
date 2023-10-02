import { Header } from "../Header"
import { Total } from "../Total"
import styles from './style.module.scss'

export const DefaultTemplate = ({children, listNotes}) => {
    return(
        <>
        <Header/>
        <main className={styles.main}>{children}</main>
        <Total listNotes={listNotes}/>
        </>
    )
}