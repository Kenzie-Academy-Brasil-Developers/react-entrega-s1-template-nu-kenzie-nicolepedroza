import { FinanceCard } from "./FinanceCard"

export const FinanceList = ({listNotes, removeNote}) => {
    console.log(listNotes)
    return (
        <>
            <h2 className="titleNunito">Resumo financeiro</h2>
            <ul>
                {listNotes.map((note) => {
                const {title, price, id} = note;
                return <FinanceCard key={id} id={id} title={title} price={price} removeNote={removeNote}/>

                })}
            </ul>
        </>
    )
}
