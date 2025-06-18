import type { Languages } from "../../define/Types";
import { Translator as t } from "../../i18n/Translator";
import './../Page.css';
import './Portfolio.css';

export interface IPortfolio {
    language: Languages;
    isMobile: boolean;
}

export default function Portfolio(props: IPortfolio) {
    return (
        <div className="panel">
            <h2 className="content">Portfolio</h2>
        </div>
    )
}