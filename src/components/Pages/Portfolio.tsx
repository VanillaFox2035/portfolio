import { useEffect, useState } from "react";
import { links, type Languages } from "../../define/Types";
import { Translator as t } from "../../i18n/Translator";
import './../Page.css';
import './Portfolio.css';
import { fetchJson } from "../../define/Tools";

export interface IPortfolio {
    language: Languages;
    isMobile: boolean;
    viewImage: Function;
}

export default function Portfolio(props: IPortfolio) {
    const twitterLink = links['twitter'];
    const pixivLink = links['pixiv'];
    const portfolioUrl = links['portfolioUrl'];

    const [isLoadingPortfolio, setIsLoadingPortfolio] = useState(true);
    const [isLoadingFailed, setIsLoadingFailed] = useState(false);
    const [portfolio, setPortfolio] = useState({});

    useEffect(() => {
        fetchJson(portfolioUrl)
        .then((json) => {
            setPortfolio(json);
            setIsLoadingPortfolio(false);
        })
        .catch((e) => {
            console.error(`Loading portfolio failed! ${e}`);
            setIsLoadingFailed(true);
        });
        return () => {};
    }, []);

    return (
        <>
            <br/>
            <h2 className="content-center">{t('header-portfolio', props.language)}</h2>
            <a href={twitterLink}><img className="portfolio-icon" src="/icon/icon-x.png"/></a>
            <a href={pixivLink}><img className="portfolio-icon" src="/icon/icon-pixiv.png"/></a>
            <div className="portfolio-panel">
                {
                    isLoadingFailed ?
                    <h3 className="commission-status-description">Load portfolio failed!</h3>
                    :
                    isLoadingPortfolio ? 
                    <h3 className="commission-status-description">Loading...</h3>
                    :
                    <div className="flex-container">
                    {
                        portfolio['gallery'].map((item, index) => 
                            <img className={props.isMobile ? "portfolio-gallery" : "portfolio-gallery-large"} key={"portfolio-item-" + index.toString()} src={item['thumbnail']} onClick={() => {props.viewImage(item['full-image'])}}/>
                        )
                    }
                    </div>
                }
            </div>
        </>
    )
}