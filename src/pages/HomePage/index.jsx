import { DefaultTemplate } from "../../components/DefaultTemplate"
import { FinanceList } from "../../components/FInanceList"
import { FinanceForm } from "../../components/FinanceForm"
import { Total } from "../../components/Total"
import styles from './style.module.scss'


export const HomePage = ({listNotes, addNote, removeNote}) => {
    const totalValue = listNotes.reduce((prevValue, note) => {
        const price = parseFloat(note.price)
        if(note.category === "Entrada"){
            return prevValue + price
        } else if(note.category === "Saída"){
            return prevValue - price
        } else{
            return prevValue
        }
    }, 0)
    return(
        <DefaultTemplate listNotes={listNotes}>
            <div className={styles.div}>
                <FinanceForm addNote={addNote}  />
                {totalValue > 0 && <Total listNotes={listNotes}/>}
            </div>
            <FinanceList listNotes={listNotes} removeNote={removeNote} />
        </DefaultTemplate>
    )
}