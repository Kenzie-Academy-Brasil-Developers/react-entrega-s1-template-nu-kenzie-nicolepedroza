export const FinanceForm = () => {
    return(
    <>
        <p className="title1">Descrição</p>
        <textarea name="" id="" cols="30" rows="10" placeholder="Digite aqui sua descrição"></textarea>
        <p className="title3">Ex: Compra de roupas</p>
        <p className="title1">Valor (R$)</p>
        <label htmlFor=""></label>
        <input type="number" name="" id="" />
        <p className="title1">Tipo de valor</p>
        <select name="" id="">
            <option className="title3" value="Entrada">Entrada</option>
            <option className="title3" value="Saída">Saída</option>
        </select>
        <button className="titleButton">Inserir valor</button>

    </>
    )
}