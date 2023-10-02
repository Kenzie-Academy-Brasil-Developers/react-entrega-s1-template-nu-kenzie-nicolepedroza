export const FinanceCard = ({title, price, id, removeNote}) => {
    return(
        <>
            <div>
                <h3 className="titleNunito">{title}</h3>
                <p className="title2Nunito">{price}</p>
            </div>
            <button onClick={() => removeNote(id)} className="btn small">Excluir</button>
        </>
    )
}