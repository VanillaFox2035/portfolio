import type { Languages } from "../../define/Types";
import { Translator as t} from "../../i18n/Translator";
import { Tabs } from "../../define/Types";
import "./../Page.css";
import "./Home.css";

export interface IHome {
    language: Languages;
    isMobile: boolean;
    setTab: Function;
}

export default function Home(props: IHome) {

    function getProfileContent() {
        return <>
            <div>
                <h2 className={props.isMobile? "home-profile-name-center": "home-profile-name"}>香草狐狸 | Vanilla Fox</h2>
                <h4 className={props.isMobile? "home-content-center" : "home-content"}>@VanillaFox2035</h4>
                <h4 className={props.isMobile? "home-content-icon-center" : "home-content-icon"}>✦ ✦ ✦</h4>
                <h4 className={props.isMobile? "home-content-center" : "home-content"}>{t("illustration-artist", props.language)}</h4>
                <h4 className={props.isMobile? "home-content-center" : "home-content"}>{t("english-and-chinese", props.language)}</h4>
            </div>
        </>;
    }

    return (
        <>
            <div className="home-panel">
                {props.isMobile? 
                    // Mobile Profile
                    <>
                        <img className="home-profile-img" src="/icon/IRyS-profile.png"/>
                        {getProfileContent()}
                    </>
                    :
                    // Desktop Profile
                    <div className="flex-container-left">
                        <img className="home-profile-img" src="/icon/IRyS-profile.png"/>
                        {getProfileContent()}
                    </div>
                }
            </div>
            <div className="home-panel">
                <h2 className="home-content">{t('what-i-do', props.language)}</h2>
                <h4 className="flex-container-left">
                    <div className="home-content-icon">✦</div>
                    <div className="home-content">{t("art-style", props.language)}</div>
                </h4>
                <h4 className="flex-container-left">
                    <div className="home-content-icon">✦</div>
                    <div className="home-content">{t("female-preferred", props.language)}</div>
                </h4>
                <h4 className="flex-container-left">
                    <div className="home-content-icon">✦</div>
                    <div className="home-content">{t("fanart-and-oc", props.language)}</div>
                </h4>
                <h4 className="flex-container-left">
                    <div className="home-content-icon">✦</div>
                    <div className="home-content">
                        {t("artwork-link", props.language)}
                        <a onClick={() => {props.setTab(Tabs.Portfolio)}}>{t("portfolio-link", props.language)}</a>
                        {t("or", props.language)}
                        <a href="https://www.pixiv.net/users/15478244">{t("pixiv-link", props.language)}</a>
                    </div>
                </h4>
            </div>
            <div className="home-panel">
                <h2 className="home-content">{t('platforms', props.language)}</h2>
            </div>
        </>
    );
}