import styles from './style.module.scss'
export const Total = ({ listNotes }) => {
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

    return (
        <>
            <div className={styles.flexbox}>
                <div>
                    <h3 className="titleNunito">Valor total: </h3>
                    <p className="title2Nunito">O valor se refere ao saldo</p>
                </div>
                <h1 className="titleNunito">R$ {totalValue.toFixed(2)}</h1>
            </div>
        </>
    )
}


