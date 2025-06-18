import type { Languages } from "../../define/Types";
import { Translator as t} from "../../i18n/Translator";
import './../Page.css';
import './CommissionStatus.css';

export interface ICommissionStatus {
    language: Languages;
    isMobile: boolean;
}

export default function CommissionStatus(props: ICommissionStatus) {
    return (
        <div className="panel">
            <h4 className="content-center">{t('commission-status', props.language)}</h4>
        </div>
    )
}