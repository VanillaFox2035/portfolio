import type { Languages } from "../../define/Types"
import { Translator as t } from "../../i18n/Translator"
import './../Page.css';
import './Contact.css';

export interface IContact {
    language: Languages;
    isMobile: boolean;
}

export default function Contact(props: IContact) {
    return (
    <>
        <br/>
        <h2 className="content-center">{t('contact', props.language)}</h2>
        <div className="panel">
            
        </div>
    </>
    )
}