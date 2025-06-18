import type { Languages } from "../../define/Types";
import { Translator as t} from "../../i18n/Translator";
import './../Page.css';
import './CommissionStatus.css';

export interface ICommissionStatus {
    language: Languages;
    isMobile: boolean;
}

export default function CommissionStatus(props: ICommissionStatus) {
    const isOpen = false;
    const statusDescription = "Working on other things...";
    return (
        <div className="panel">
            {
                isOpen ? 
                <>
                    <img className="commission-status-icon" src="/icon/circle-check.svg"></img>
                    <h2 className="commission-status-open-text">Commission Open</h2>
                </>
                :
                <>
                    <img className="commission-status-icon" src="/icon/circle-x.svg"></img>
                    <h2 className="commission-status-closed-text">Commission Closed</h2>
                </>
            }
            {
                statusDescription && 
                <h3 className="commission-status-description">{statusDescription}</h3>
            }
        </div>
    )
}