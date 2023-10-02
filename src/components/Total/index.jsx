import styles from './style.module.scss'
export const Total = () => {
    return (
        <>
            <div className={styles.flexbox}>
                <div className={styles.div}>
                    <h3 className="titleNunito">Valor total: </h3>
                    <p className="title2Nunito">O valor se refere ao saldo</p>
                </div>
                <h1 className="titleNunito">R$</h1>
            </div>
        </>
    )



}