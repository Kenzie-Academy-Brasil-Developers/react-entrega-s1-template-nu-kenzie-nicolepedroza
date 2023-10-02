import { useState } from "react";
import { Input } from "../Input";
import styles from './style.module.scss'


export const FinanceForm = ({addNote}) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(1);
    const [category, setCategory] = useState("Entrada");

    const submit = (e) => {
        e.preventDefault()

        addNote(title, price, category);
        setTitle("");
        setPrice("");
        setCategory("Entrada")
    }



    return (
        <>
            <form className={styles.form} onSubmit={submit}>
            <p className="title1">Descrição</p>
                <Input
                    placeholder="Digite aqui sua descrição"
                    type="text"
                    id="title"
                    value={title}
                    setValue={setTitle} />

                <p className="title3">Ex: Compra de roupas</p>
                <p className="title1">Valor (R$)</p>


                <Input
                    placeholder="1"
                    type="number"
                    id="price"
                    value={price}
                    setValue={setPrice}
                />
            <p className="title1">Tipo de valor</p>
            <select id="category" onChange={(e) => setCategory(e.target.value)}>
                <option className="title3" value="Entrada">Entrada</option>
                <option className="title3" value="Saída">Saída</option>
            </select>
            <button className="btn large" type="submit">Inserir valor</button>
            </form>


        </>
    )
} 