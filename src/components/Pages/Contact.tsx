import type { Languages } from "../../define/Types"
import { Translator as t } from "../../i18n/Translator"

export interface IContact {
    language: Languages;
    isMobile: boolean;
}

export default function Contact(props: IContact) {
    return (
        <div>
            Contact
        </div>
    )
}