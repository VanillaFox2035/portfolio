import type { Languages } from "../../define/Types"
import { Translator as t } from "../../i18n/Translator"

export interface IPortfolio {
    language: Languages
}

export default function Portfolio(props: IPortfolio) {
    return (
        <div>
            Portfolio
        </div>
    )
}