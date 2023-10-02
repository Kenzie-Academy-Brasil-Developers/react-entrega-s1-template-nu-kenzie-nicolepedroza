import styles from './style.module.scss'
export const FinanceCard = ({ title, price, id, category, removeNote }) => {
    return (
        <>
            <div className={`${styles.divUl} ${category === "Entrada" ? styles.green : styles.grey}`} >
                <div className={styles.divGap}>
                    <h3 className="titleNunito">{title}</h3>
                    <p className="title2Nunito">{category}</p>
                </div>
                <div className={styles.divGap}>
                    <p className="title2Nunito">R$ {price},00</p>
                    <button onClick={() => removeNote(id)} className={styles.button}>Excluir</button>
                </div>
            </div>
        </>
    )
}

