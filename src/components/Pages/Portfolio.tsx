import type { Languages } from "../../define/Types";
import { Translator as t } from "../../i18n/Translator";
import './../Page.css';
import './Portfolio.css';

export interface IPortfolio {
    language: Languages;
    isMobile: boolean;
    viewImage: Function;
}

export default function Portfolio(props: IPortfolio) {
    return (
        <>
            <br/>
            <h2 className="content-center">{t('header-portfolio', props.language)}</h2>
            <div className="panel">
            
            </div>
        </>
    )
}