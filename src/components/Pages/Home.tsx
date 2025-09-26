import type { Languages } from "../../define/Types";
import { Translator as t} from "../../i18n/Translator";
import { links } from "../../define/Types";
import CommissionStatus from "./../CommissionStatus";
import "./../Page.css";
import "./Home.css";

export interface IHome {
    language: Languages;
    isMobile: boolean;
    changeTab: Function;
}

export default function Home(props: IHome) {
    function getProfileContent() {
        return <>
            <div>
                <h2 className={props.isMobile? "home-profile-name-center": "home-profile-name"}>香草狐狸 | Vanilla Fox</h2>
                <a href={links['twitter']}>
                    <h3 className={props.isMobile? "content-center" : "content"}>@VanillaFox2035</h3>
                </a>
                <h4 className={props.isMobile? "content-icon-center" : "content-icon"}>✦ ✦ ✦</h4>
                <h4 className={props.isMobile? "content-center" : "content"}>{t("illustration-artist", props.language)}</h4>
                <h4 className={props.isMobile? "content-center" : "content"}>{t("english-and-chinese", props.language)}</h4>
            </div>
        </>;
    }

    return (
        <>
            <img className="home-showcase-image" src={links['showcase-image']}/>
            <CommissionStatus language={props.language} isMobile={props.isMobile}/>
            <div className="home-panel">
                {props.isMobile? 
                    // Mobile Profile
                    <>
                        <img className="home-profile-img" src={links['profile-image']}/>
                        {getProfileContent()}
                    </>
                    :
                    // Desktop Profile
                    <div className="flex-container-left">
                        <img className="home-profile-img" src={links['profile-image']}/>
                        {getProfileContent()}
                    </div>
                }
            </div>
            <div className="home-panel">
                <h3 className="content">{t('what-i-do', props.language)}</h3>
                <div className="flex-container-left">
                    <div className="content-icon">✦</div>
                    <div className="content">{t("anime-illustrations", props.language)}</div>
                </div>
                <div className="flex-container-left">
                    <div className="content-icon">✦</div>
                    <div className="content">{t("animations", props.language)}</div>
                </div>
            </div>
            <div className="home-panel">
                <h3 className="content">{t('socials', props.language)}</h3>
                <div className="flex-container-left">
                    <a href={links['twitter']}><img className="platform-icon" src={links['twitter-image']}/></a>
                    <a className="content" href={links['twitter']}>Twitter</a>
                    <h4 className="content-left-pad">{t('english', props.language)}</h4>
                </div>
                <div className="flex-container-left">
                    <a href={links['pixiv']}><img className="platform-icon" src={links['pixiv-image']}/></a>
                    <a className="content" href={links['pixiv']}>Pixiv</a>
                    <h4 className="content-left-pad">{t('english', props.language)}</h4>
                </div>
                <div className="flex-container-left">
                    <a href={links['facebook']}><img className="platform-icon" src={links['facebook-image']}/></a>
                    <a className="content" href={links['facebook']}>Facebook</a>
                    <h4 className="content-left-pad">{t('chinese', props.language)}</h4>
                </div>
            </div>
            <div className="home-panel">
                <h3 className="content">{t('support-me', props.language)}</h3>
                <div className="flex-container-left">
                    <a href={links['patreon']}><img className="platform-icon" src=""/></a>
                    <a className="content" href={links['patreon']}>Patreon</a>
                    <h4 className="content-left-pad">{t('patreon-benefit', props.language)}</h4>
                </div>
                <div className="flex-container-left">
                    <a href={links['fanbox']}><img className="platform-icon" src=""/></a>
                    <a className="content" href={links['fanbox']}>Fanbox</a>
                    <h4 className="content-left-pad">{t('fanbox-benefit', props.language)}</h4>
                </div>
                <div className="flex-container-left">
                    <a href={links['ko-fi']}><img className="platform-icon" src=""/></a>
                    <a className="content" href={links['ko-fi']}>Ko-fi</a>
                    <h4 className="content-left-pad">{t('ko-fi-benefit', props.language)}</h4>
                </div>
            </div>
            <h4 className="ps">
                {t('written-by-me', props.language)}
            </h4>
            {
                // Ko-fi widget
                /*<iframe id='kofiframe' src='https://ko-fi.com/vanillafox2035/?hidefeed=true&widget=true&embed=true&preview=true' height='712' title='vanillafox2035'></iframe>*/
            }
        </>
    );
}