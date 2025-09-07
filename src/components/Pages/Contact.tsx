import type { Languages } from "../../define/Types"
import { Translator as t } from "../../i18n/Translator"
import './../Page.css';
import './Contact.css';
import { Tabs, links } from "../../define/Types";
import CommissionStatus from "./../CommissionStatus";

export interface IContact {
    language: Languages;
    isMobile: boolean;
    changeTab: Function;
}

export default function Contact(props: IContact) {
    const twitterLink = links['twitter'];
    const pixivLink = links['pixiv'];
    const emailLink = links['email'];
    //const googleFormLink = links['googleForm'];

    return (
    <>
        <br/>
        <h2 className="content-center">{t('contact', props.language)}</h2>
        <CommissionStatus language={props.language} isMobile={props.isMobile}/>
        <div className="panel">
            <h4 className="content">{t('sumbit-via-email', props.language)}</h4>
            <div className="flex-container-left">
                <a href={'mailto:' + emailLink}><img className="platform-icon" src="https://dl.dropboxusercontent.com/scl/fi/36ljpkrvhje3bmkvpf9fy/icon-email.png?rlkey=q2sk5yrbfbkllxkcyq3vzeedz&st=pcn1fx5l&dl=0"/></a>
                <a className="content" href={'mailto:' + emailLink}>{emailLink}</a>
            </div>
            <div className="flex-container-left">
                <div className="content-icon">✦</div>
                <div className="content">
                {t('read-commission-and-prices-1', props.language)}
                    <a onClick={() => {props.changeTab(Tabs.Commission)}}>{t("commission-link", props.language)}</a>
                    {t("read-commission-and-prices-2", props.language)}
                    <a onClick={() => {props.changeTab(Tabs.Prices)}}>{t("prices-link", props.language)}</a>
                    {t("read-commission-and-prices-3", props.language)}
                </div>
            </div>
            <div className="flex-container-left">
                <div className="content-icon">✦</div>
                <h4 className="content">{t('reply-within-3-days', props.language)}</h4>
            </div>
            <div className="flex-container-left">
                <div className="content-icon">✦</div>
                    <div className="content">
                    {t('refer-to-how-1', props.language)}
                    <a onClick={() => {props.changeTab(Tabs.Commission)}}>{t("commission-link", props.language)}</a>
                    {t("refer-to-how-2", props.language)}
                </div>
            </div>      
        </div>
        <div className="panel">
             <h4 className="content">{t('for-other-questions', props.language)}</h4>
             <div className="flex-container-left">
                <a href={twitterLink}><img className="portfolio-icon" src="https://dl.dropboxusercontent.com/scl/fi/cqww62nnb3c7gclsfu6gn/icon-x.png?rlkey=n5j7r96oht59u7947fi8k5av3&st=f2pvyo7k&dl=0"/></a>
                <a href={pixivLink}><img className="portfolio-icon" src="https://dl.dropboxusercontent.com/scl/fi/9xbrrf6dz0zzkd5vycy8n/icon-pixiv.png?rlkey=qx6swmh4icn5ab8a4470zp1zx&st=qxan6obh&dl=0"/></a>
             </div>
        </div>
    </>
    )
}