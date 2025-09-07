import type { Languages } from "../../define/Types";
import { Translator as t} from "../../i18n/Translator";
import { links, Tabs } from "../../define/Types";
import CommissionStatus from "./../CommissionStatus";
import "./../Page.css";
import "./Home.css";

export interface IHome {
    language: Languages;
    isMobile: boolean;
    changeTab: Function;
}

export default function Home(props: IHome) {

    const showcaseImageLink = links['showcaseImageLink'];
    const twitterLink = links['twitter'];
    const pixivLink = links['pixiv'];
    const facebookLink = links['facebook'];

    function getProfileContent() {
        return <>
            <div>
                <h2 className={props.isMobile? "home-profile-name-center": "home-profile-name"}>香草狐狸 | Vanilla Fox</h2>
                <a href={twitterLink}>
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
            <img className="home-showcase-image" src={showcaseImageLink}/>
            <CommissionStatus language={props.language} isMobile={props.isMobile}/>
            <div className="home-panel">
                {props.isMobile? 
                    // Mobile Profile
                    <>
                        <img className="home-profile-img" src="https://dl.dropboxusercontent.com/scl/fi/obeyvs4hhouit5z0jziig/profile-image.png?rlkey=cat59xwyxauakfucprcgu5pic&st=fb16jn2s&dl=0"/>
                        {getProfileContent()}
                    </>
                    :
                    // Desktop Profile
                    <div className="flex-container-left">
                        <img className="home-profile-img" src="https://dl.dropboxusercontent.com/scl/fi/obeyvs4hhouit5z0jziig/profile-image.png?rlkey=cat59xwyxauakfucprcgu5pic&st=fb16jn2s&dl=0"/>
                        {getProfileContent()}
                    </div>
                }
            </div>
            <div className="home-panel">
                <h3 className="content">{t('what-i-do', props.language)}</h3>
                <div className="flex-container-left">
                    <div className="content-icon">✦</div>
                    <div className="content">{t("art-style", props.language)}</div>
                </div>
                <div className="flex-container-left">
                    <div className="content-icon">✦</div>
                    <div className="content">{t("female-preferred", props.language)}</div>
                </div>
                <div className="flex-container-left">
                    <div className="content-icon">✦</div>
                    <div className="content">{t("fanart-and-oc", props.language)}</div>
                </div>
                <div className="flex-container-left">
                    <div className="content-icon">✦</div>
                    <div className="content">
                        {t("artwork-link", props.language)}
                        <a onClick={() => {props.changeTab(Tabs.Portfolio)}}>{t("portfolio-link", props.language)}</a>
                        {t("or", props.language)}
                        <a href={pixivLink}>{t("pixiv-link", props.language)}</a>
                    </div>
                </div>
            </div>
            <div className="home-panel">
                <h3 className="content">{t('platforms', props.language)}</h3>
                <div className="flex-container-left">
                    <a href={twitterLink}><img className="platform-icon" src="https://dl.dropboxusercontent.com/scl/fi/cqww62nnb3c7gclsfu6gn/icon-x.png?rlkey=n5j7r96oht59u7947fi8k5av3&st=ljnxobff&dl=0"/></a>
                    <a className="content" href={twitterLink}>@VanillaFox2035</a>
                    <h4 className="content-left-pad">{t('english', props.language)}</h4>
                </div>
                <div className="flex-container-left">
                    <a href={pixivLink}><img className="platform-icon" src="https://dl.dropboxusercontent.com/scl/fi/9xbrrf6dz0zzkd5vycy8n/icon-pixiv.png?rlkey=qx6swmh4icn5ab8a4470zp1zx&st=ae096wqr&dl=0"/></a>
                    <a className="content" href={pixivLink}>@15478244</a>
                    <h4 className="content-left-pad">{t('english', props.language)}</h4>
                </div>
                <div className="flex-container-left">
                    <a href={facebookLink}><img className="platform-icon" src="https://dl.dropboxusercontent.com/scl/fi/w5dzrl2l9cq1pupotnolg/icon-facebook.png?rlkey=zubddlcd2q7k34uoo7sy440ab&st=goh460re&dl=0"/></a>
                    <a className="content" href={facebookLink}>@Kitsune2035</a>
                    <h4 className="content-left-pad">{t('chinese', props.language)}</h4>
                </div>
            </div>
            <h4 className="ps">
                {t('written-by-me', props.language)}
            </h4>
        </>
    );
}