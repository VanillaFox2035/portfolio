import { langDictionary, type Languages } from "../../define/Types";
import { Translator as t} from "../../i18n/Translator";
import './../Page.css';
import './Prices.css';
import CommissionStatus from "./../CommissionStatus";
import { useEffect, useState } from "react";
import { fetchJson, translateToString } from "../../define/Tools";

export interface IPrices {
    language: Languages;
    isMobile: boolean;
    viewImage: Function;
}

export default function Prices(props: IPrices) {
    const pricesUrl = "https://dl.dropboxusercontent.com/scl/fi/yz2ipyhteyul2tdor75vd/Prices.json?rlkey=h7f6z3o4iq4hs67khg37j7s72&st=wwkw1byd&dl=0";
    const [isLoadingPrices, setIsLoadingPrices] = useState(true);
    const [prices, setPrices] = useState({});

    useEffect(() => {
        // Read prices
        fetchJson(pricesUrl)
        .then((json) => {
            setPrices(json);
            setIsLoadingPrices(false);
        })
        .catch((e) => {
            console.error(`Loading prices failed! ${e}`);
        });
        return () => {}
    }, []);

    return (
        <>
            <CommissionStatus language={props.language} isMobile={props.isMobile}/>
            <br/>
            <h2 className="content-center">{t('header-prices', props.language)}</h2>
                {
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
                                        <div className="flex-container-left">
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