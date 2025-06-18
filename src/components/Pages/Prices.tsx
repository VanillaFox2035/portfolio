import type { Languages } from "../../define/Types";
import { Translator as t} from "../../i18n/Translator";
import './../Page.css';
import './Prices.css';
import CommissionStatus from "./CommissionStatus";

export interface IPrices {
    language: Languages;
    isMobile: boolean;
}

export default function Prices(props: IPrices) {
    return (
        <>
            <CommissionStatus language={props.language} isMobile={props.isMobile}/>
            <div className="panel">
                <h2 className="content">Prices</h2>
            </div>
        </>
    )
}