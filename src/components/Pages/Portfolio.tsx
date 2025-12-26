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
    const [isLoadingPortfolio, setIsLoadingPortfolio] = useState(true);
    const [isLoadingFailed, setIsLoadingFailed] = useState(false);
    const [portfolio, setPortfolio] = useState({});

    useEffect(() => {
        fetchJson(links['gallery-url'])
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
            <div className="flex-container">
                <h4 className="content-left-pad">{t('portfolio-want-more', props.language)}</h4>
                <a href={links['twitter']}><img className="portfolio-icon" src={links['twitter-image']}/></a>
                <a href={links['pixiv']}><img className="portfolio-icon" src={links['pixiv-image']}/></a>
            </div>
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