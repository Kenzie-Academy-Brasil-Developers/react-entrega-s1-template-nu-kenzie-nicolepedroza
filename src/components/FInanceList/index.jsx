import { FinanceCard } from "./FinanceCard"
import styles from './style.module.scss'

export const FinanceList = ({ listNotes, removeNote }) => {


    return (
        <>  
        <div className={styles.flexbox}>
            <div className={styles.div}>
                <h2 className="titleNunito">Resumo financeiro</h2>
            </div>
                {listNotes.length > 0 ? (
            <ul>
                {listNotes.map((note) => {
                    const { title, price, category, id } = note
                    return <FinanceCard 
                            key={id}
                            id={id} 
                            title={title}
                            price={price} 
                            category={category}
                            removeNote={removeNote} />

                })}
            </ul>
                    
                ) : (
                  <p className="title3Nunito">Você ainda nao possui nenhum lançamento</p>  
                )}

        </div>
        </>
    )
}
