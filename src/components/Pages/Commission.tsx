import type { Languages } from "../../define/Types"
import { Translator as t} from "../../i18n/Translator"

export interface ICommission {
    language: Languages
}

export default function Commission(props: ICommission) {
    return (
        <div>
            Commission
        </div>
    )
}