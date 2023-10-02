import { DefaultTemplate } from "../../components/DefaultTemplate"
import { FinanceList } from "../../components/FInanceList"
import { FinanceForm } from "../../components/FinanceForm"


export const HomePage = ({listNotes, addNote, removeNote}) => {
    return(
        <DefaultTemplate listNotes={listNotes}>
            <FinanceForm addNote={addNote}  />
            <FinanceList listNotes={listNotes} removeNote={removeNote} />
        </DefaultTemplate>
    )
}