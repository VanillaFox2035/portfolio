import { langDictionary, links, type Languages } from "../../define/Types";
import { Translator as t} from "../../i18n/Translator";
import './../Page.css';
import './Prices.css';
import { useEffect, useState } from "react";
import { fetchJson, translateToString } from "../../define/Tools";

export interface IPrices {
    language: Languages;
    isMobile: boolean;
    viewImage: Function;
}

export default function Prices(props: IPrices) {
    const [isLoadingPrices, setIsLoadingPrices] = useState(true);
    const [isLoadingFailed, setIsLoadingFailed] = useState(false);
    const [prices, setPrices] = useState({});

    useEffect(() => {
        // Read prices
        fetchJson(links['commission-status-url'])
        .then((json) => {
            setPrices(json);
            setIsLoadingPrices(false);
        })
        .catch((e) => {
            console.error(`Loading prices failed! ${e}`);
            setIsLoadingFailed(true);
        });
        return () => {}
    }, []);

    return (
        <>
            <br/>
            <h2 className="content-center">{t('header-prices', props.language)}</h2>
                {
                    isLoadingFailed ?
                    <h4 className="prices-description">Load prices failed!</h4>
                    :
                    isLoadingPrices ?
                    <h4 className="prices-description">Loading...</h4>
                    :
                    <>
                    {
                        prices['shelf'].map((item, index) => 
                            <div className="panel" key={"prices-item-" + index.toString()}>
                                <div className="flex-container-left">
                                    <img className={props.isMobile ? "prices-thumbnail" : "prices-thumbnail-large"} src={item['thumbnail']} onClick={() => {props.viewImage(item['full-image'])}}/>
                                    <div className="content">
                                        <div className="flex-container-left-center">
                                            <h4 className={prices['commission-status']['is-open'] && item['is-open'] ? 'prices-item-open' : 'prices-item-closed'}>
                                                {prices['commission-status']['is-open'] && item['is-open'] ? t('open', props.language) : t('closed', props.language)}
                                            </h4>
                                            <h3 className="content">{item['item-name'][translateToString(props.language, langDictionary)]}</h3>
                                        </div>
                                        <div className="flex-container-left">
                                            <h4 className="prices-item-description">{item['item-description'][translateToString(props.language, langDictionary)]}</h4>
                                        </div>
                                        <div className="flex-container-left">
                                            <div className="content-icon">✦</div>
                                            <h4 className="content">{item['price'][translateToString(props.language, langDictionary)]}</h4>
                                        </div>
                                        {
                                            item['supplement'][translateToString(props.language, langDictionary)] &&
                                            <div className="flex-container-left">
                                                <div className="content-icon">✦</div>
                                                <h4 className="content">{item['supplement'][translateToString(props.language, langDictionary)]}</h4>
                                            </div>
                                        }
                                    </div>
                                    
                                </div>
                            </div>
                        )                           
                    }
                    </>
                }               
        </>
    )
}