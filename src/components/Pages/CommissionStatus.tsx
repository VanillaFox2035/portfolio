import { useState, useEffect } from "react";
import { langDictionary, translateToString, type Languages } from "../../define/Types";
import { Translator as t} from "../../i18n/Translator";
import './../Page.css';
import './CommissionStatus.css';

export interface ICommissionStatus {
    language: Languages;
    isMobile: boolean;
}

export default function CommissionStatus(props: ICommissionStatus) {
    const commissionStatusUrl = "https://dl.dropboxusercontent.com/scl/fi/z3vpyfcqwyfg5kuwdi2fw/CommissionStatus.json?rlkey=9czot91664v5qt74z5n3jodwf&st=xuti5s4s&dl=0";

    const [isLoading, setIsLoading] = useState(true);
    const [isCommissionOpen, setIsCommissionOpen] = useState(false);
    const [description, setDescription] = useState({});

    function fetchJson(url: string): Promise<object> {
        return new Promise<object>((resolve, reject) => {
            // Fetc from url
            fetch(url)
            .then((response) => {
                // Read json
                response.json()
                .then((json) => {
                    resolve(json);
                })
                .catch((e) => {
                    reject(e);
                });
            })
            .catch((e) => {
                reject(e);
            })
        });
    }

    useEffect(() => {
        fetchJson(commissionStatusUrl)
        .then((json) => {
            setIsCommissionOpen(json['isOpen']);
            const desc = json['description'];
            setDescription(desc);
            setIsLoading(false);
        })
        .catch((e) => {
            console.error(`Loading commission status failed! ${e}`);
        });
        return () => {}
    }, []);

    return (
        <div className="panel">
            {
                isLoading ? 
                <h3 className="commission-status-description">Loading...</h3>
                :
                isCommissionOpen ? 
                <>
                    <img className="commission-status-icon" src="/icon/circle-check.svg"></img>
                    <h2 className="commission-status-open-text">{t('commission-open', props.language)}</h2>
                </>
                :
                <>
                    <img className="commission-status-icon" src="/icon/circle-x.svg"></img>
                    <h2 className="commission-status-closed-text">{t('commission-closed', props.language)}</h2>
                </>
            }
            {
                !isLoading && description &&
                <h3 className="commission-status-description">{description[translateToString(props.language, langDictionary)]}</h3>
            }
        </div>
    )
}