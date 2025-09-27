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
    return (
    <>
        <br/>
        <h2 className="content-center">{t('contact', props.language)}</h2>
        <CommissionStatus language={props.language} isMobile={props.isMobile}/>

        <div className="panel">
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
        </div>
        <div className="panel">
            <h4 className="content">{t('submit-via-email', props.language)}</h4>
            <div className="flex-container-left">
                <a href={'mailto:' + links['email']}><img className="platform-icon" src={links['email-image']}/></a>
                <a className="content" href={'mailto:' + links['email']}>{links['email']}</a>
            </div>
            <div className="flex-container-left">
                <a href={links['twitter']}><img className="platform-icon" src={links['twitter-image']}/></a>
                <a className="content" href={links['twitter']}>Twitter</a>
            </div>
            <div className="flex-container-left">
                <a href={links['pixiv']}><img className="platform-icon" src={links['pixiv-image']}/></a>
                <a className="content" href={links['pixiv']}>Pixiv</a>
            </div>
            <div className="flex-container-left">
                    <a href={links['facebook']}><img className="platform-icon" src={links['facebook-image']}/></a>
                    <a className="content" href={links['facebook']}>Facebook</a>
            </div>
            <h4 className="content">{t('submit-via-forms', props.language)}</h4>
            <div className="flex-container-left">
                <a href={links['google-forms']}><img className="platform-icon" src={links['google-forms-image']}/></a>
                <a className="content" href={links['google-forms']}>{t('commission-forms', props.language)}</a>
            </div> 
        </div>
        <div className="panel">
            <h4 className="content">{t('alternative-support', props.language)}</h4>
                <div className="flex-container-left">
                    <a href={links['patreon']}><img className="platform-icon" src={links['patreon-image']}/></a>
                    <a className="content" href={links['patreon']}>Patreon</a>
                    <h4 className="content-left-pad">{t('patreon-benefit', props.language)}</h4>
                </div>
                <div className="flex-container-left">
                    <a href={links['fanbox']}><img className="platform-icon" src={links['fanbox-image']}/></a>
                    <a className="content" href={links['fanbox']}>Fanbox</a>
                    <h4 className="content-left-pad">{t('fanbox-benefit', props.language)}</h4>
                </div>
                <div className="flex-container-left">
                    <a href={links['ko-fi']}><img className="platform-icon" src={links['ko-fi-image']}/></a>
                    <a className="content" href={links['ko-fi']}>Ko-fi</a>
                    <h4 className="content-left-pad">{t('ko-fi-benefit', props.language)}</h4>
                </div>
        </div>
    </>
    )
}