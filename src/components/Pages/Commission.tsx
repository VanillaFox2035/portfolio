import type { Languages } from "../../define/Types";
import { Translator as t} from "../../i18n/Translator";
import './../Page.css';
import './Commission.css';
import CommissionStatus from "./../CommissionStatus";

export interface ICommission {
    language: Languages;
    isMobile: boolean;
}

export default function Commission(props: ICommission) {


    return (
        <>
            <CommissionStatus language={props.language} isMobile={props.isMobile}/>
            <br/>
            <h2 className="content-center">{t('header-commission', props.language)}</h2>
            <div className="panel">
                
            </div>
        </>
        
    )
}