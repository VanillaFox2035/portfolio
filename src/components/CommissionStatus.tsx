import { useState, useEffect } from "react";
import { langDictionary, Languages, links } from "../define/Types";
import { translateToString, fetchJson } from "../define/Tools";
import { Translator as t} from "../i18n/Translator";
import './Page.css';
import './CommissionStatus.css';

export interface ICommissionStatus {
    language: Languages;
    isMobile: boolean;
}

export default function CommissionStatus(props: ICommissionStatus) {
    // Use dropbox to store status json files
    const commissionStatusUrl = links['commissionStatusUrl'];

    const [isLoading, setIsLoading] = useState(true);
    const [isCommissionOpen, setIsCommissionOpen] = useState(false);
    const [isLoadingFailed, setIsLoadingFailed] = useState(false);
    const [description, setDescription] = useState({});

    useEffect(() => {
        fetchJson(commissionStatusUrl)
        .then((json) => {
            setIsCommissionOpen(json['commission-status']['is-open']);
            const status = json['commission-status']['status'];
            setDescription(status);
            setIsLoading(false);
        })
        .catch((e) => {
            console.error(`Loading commission status failed! ${e}`);
            setIsLoadingFailed(true);
        });
        return () => {}
    }, []);

    return (
        <div className={isCommissionOpen ? "commission-status-panel-open" : "commission-status-panel-closed"}>
            {
                isLoadingFailed ?
                <h3 className="commission-status-description">Load commission status failed!</h3>
                :
                isLoading ? 
                <h3 className="commission-status-description">Loading...</h3>
                :
                isCommissionOpen ? 
                <div className="flex-container-center">
                    <img className="commission-status-icon" src="/icon/circle-check.svg"></img>
                    <h2 className="commission-status-open-text">{t('commission-open', props.language)}</h2>
                </div>
                :
                <div className="flex-container-center">
                    <img className="commission-status-icon" src="/icon/circle-x.svg"></img>
                    <h2 className="commission-status-closed-text">{t('commission-closed', props.language)}</h2>
                </div>
            }
            {
                !isLoading && description &&
                <h3 className="commission-status-description">{description[translateToString(props.language, langDictionary)]}</h3>
            }
        </div>
    )
}