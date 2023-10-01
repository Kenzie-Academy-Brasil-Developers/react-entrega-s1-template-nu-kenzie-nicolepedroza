import { Header } from "../Header"
import { Total } from "../Total"

export const DefaultTemplate = ({children}) => {
    return(
        <>
        <Header/>
        <main>{children}</main>
        <Total/>
        </>
    )
}