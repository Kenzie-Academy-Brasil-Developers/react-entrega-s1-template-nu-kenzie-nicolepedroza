import { DefaultTemplate } from "../../components/DefaultTemplate"
import { FinanceList } from "../../components/FInanceList"
import { FinanceForm } from "../../components/FinanceForm"


export const HomePage = () => {
    return(
        <DefaultTemplate>
            <FinanceForm/>
            <FinanceList/>
        </DefaultTemplate>
    )
}