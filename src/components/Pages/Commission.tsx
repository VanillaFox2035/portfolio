import type { Languages } from "../../define/Types";
import { Translator as t} from "../../i18n/Translator";
import { links, Tabs } from "../../define/Types";
import './../Page.css';
import './Commission.css';

export interface ICommission {
    language: Languages;
    isMobile: boolean;
    changeTab: Function;
}

export default function Commission(props: ICommission) {
    const pixivLink = links['pixiv'];

    return (
        <>
            <br/>
            <h2 className="content-center">{t('header-commission', props.language)}</h2>
            <div className="panel">
                <h3 className="content">{t('procedure', props.language)}</h3>
                <div className="commission-procedure-panel">
                    <div className="flex-container-left">
                        <div className="content-icon">✦</div>
                        <h4 className="commission-content-likable">{t('negotiation', props.language)}</h4>
                    </div>     
                    <h4 className="content">{t('negotiation-desc', props.language)}</h4>
                </div>
                <h2 className="commission-arrow">⇩</h2>
                <div className="commission-procedure-panel">
                    <div className="flex-container-left">
                        <div className="content-icon">✦</div>
                        <h4 className="commission-content-likable">{t('deposit', props.language)}</h4>
                    </div>    
                    <h4 className="content">{t('deposit-desc', props.language)}</h4>
                </div>
                <h2 className="commission-arrow">⇩</h2>
                <div className="commission-procedure-panel">
                    <div className="flex-container-left">
                        <div className="content-icon">✦</div>
                        <h4 className="commission-content-likable">{t('sketching', props.language)}</h4>
                    </div>    
                    <h4 className="content">
                        {t('sketching-desc-1', props.language)}
                        <span className="commission-content-emphasis">{t('revision-number', props.language)}</span>
                        {t('sketching-desc-2', props.language)}
                    </h4>
                </div>
                <h2 className="commission-arrow">⇩</h2>
                <div className="commission-procedure-panel">
                    <div className="flex-container-left">
                        <div className="content-icon">✦</div>
                        <h4 className="commission-content-likable">{t('final-payment', props.language)}</h4>
                    </div>    
                    <h4 className="content">{t('final-payment-desc', props.language)}</h4>
                </div>
                <h2 className="commission-arrow">⇩</h2>
                <div className="commission-procedure-panel">
                    <div className="flex-container-left">
                        <div className="content-icon">✦</div>
                        <h4 className="commission-content-likable">{t('completion', props.language)}</h4>
                    </div>    
                    <h4 className="content">
                        {t('completion-desc-1', props.language)}
                        <span className="commission-content-emphasis">{t('revision-number', props.language)}</span>
                        {t('completion-desc-2', props.language)}
                    </h4>
                </div>
                <h2 className="commission-arrow">⇩</h2>
                <div className="commission-procedure-panel">
                    <div className="flex-container-left">
                        <div className="content-icon">✦</div>
                        <h4 className="commission-content-likable">{t('deliver-files', props.language)}</h4>
                    </div>    
                    <h4 className="content">{t('deliver-files-desc', props.language)}</h4>
                </div>
            </div>
            <div className="panel">
                <h3 className="content">{t('how-to-request', props.language)}</h3>
                <h4 className="content">{t('how-to-submit', props.language)}</h4>
                {
                    t('how-to-submit-items', props.language).map((item, index) => 
                        <div className="flex-container-left" key={'how-to-sumbit-' + index.toString()}>
                            <div className="content-icon">✦</div>
                            <h4 className="content">{item}</h4>
                        </div>
                    )
                }
                <div className="divider">✦ ✦ ✦ ✦ ✦</div>
                <h4 className="content">{t('if-not-spec', props.language)}</h4>
                {
                    t('if-not-spec-items', props.language).map((item, index) => 
                        <div className="flex-container-left" key={'how-to-sumbit-' + index.toString()}>
                            <div className="content-icon">✦</div>
                            <h4 className="content">{item}</h4>
                        </div>
                    )
                }
            </div>
            <div className="panel">
                <h3 className="content">{t('accepted-contents', props.language)}</h3>
                {
                    ['adored', 'welcomed', 'troubled', 'refused'].map((likable, likableIndex) => 
                        <div>
                        <div className="flex-container-left" key={'accepted-contents-' + likableIndex.toString()}>
                            <h4 className="commission-content-likable">{t(likable, props.language)}</h4>
                            <h4 className="commission-content-description-padded">{t(likable + "-desc", props.language)}</h4>
                        </div>
                        {
                                t(likable + "-items", props.language).map((item, itemIndex) => 
                                   <div className="flex-container-left" key={'accepted-contents-' + likableIndex.toString() + '-item-' + itemIndex.toString()}>
                                        <div className="content-icon">✦</div>
                                        <h4 className={likableIndex === 3 && itemIndex === 1 ? "commission-revealer" : "content"}  key={`accepted-contents-${likableIndex}-item-${itemIndex}`}>{item}</h4>
                                        {
                                            likableIndex === 3 && itemIndex === 1 &&
                                            <h4 className="commission-hidden">{t('with-exceptions', props.language)}</h4>
                                        }
                                    </div>
                                )
                        }
                        </div>
                    )
                }
                
            </div>
            <div className="panel">
                <h3 className="content">{t('revisions', props.language)}</h3>
                <div className="flex-container-left">
                    <div className="content-icon">✦</div>
                    <h4 className="content">{t('check-in-on-client', props.language)}</h4>
                </div>
                <div className="flex-container-left">
                    <div className="content-icon">✦</div>
                    <div className="content">
                        {t('chances-for-revision-1', props.language)}
                        <span className="commission-content-emphasis">{t('revision-number', props.language)}</span>
                        {t('chances-for-revision-2', props.language)}
                    </div>
                </div>
                <div className="flex-container-left">
                    <div className="content-icon">✦</div>
                    <h4 className="content">{t('exceeding-revision-quota', props.language)}</h4>
                </div>
            </div>
            <div className="panel">
                <h3 className="content">{t('terms-of-use', props.language)}</h3>
                <h4 className="content">{t('may-be-used', props.language)}</h4>
                {
                    t('may-be-used-items', props.language).map((item, index) => 
                        <div className="flex-container-left" key={'how-to-sumbit-' + index.toString()}>
                            <img className="platform-icon" src="https://dl.dropboxusercontent.com/scl/fi/4jm2g12r10i1szg0xpnkm/circle-check.svg?rlkey=5p98pj08p24lu27gwlcqf0sa9&st=90v1dk6g&dl=0"/>
                            <h4 className="content">{item}</h4>
                        </div>
                    )
                }
                <h4 className="content">{t('do-not-use', props.language)}</h4>
                {
                    t('do-not-use-items', props.language).map((item, index) => 
                        <div className="flex-container-left" key={'how-to-sumbit-' + index.toString()}>
                            <img className="platform-icon" src="https://dl.dropboxusercontent.com/scl/fi/hx98phv2lzsd2hva4vjp2/circle-x-red.svg?rlkey=9ixw8pr05nf4iym20h7ise4ry&st=g9bmjnqq&dl=0"/>
                            <h4 className="content">{item}</h4>
                        </div>
                    )
                }
                <h4 className="content">{t('unsure-about-intend', props.language)}</h4>
                <h4 className="commission-content-description">{t('guidelines-for-commercial', props.language)}</h4>
            </div>
            <div className="panel">
                <h3 className="content">{t('other-notes', props.language)}</h3>
                <div className="flex-container-left">
                    <div className="content-icon">✦</div>
                    <h4 className="content">{t('shared-on-socials', props.language)}</h4>
                </div>
                <div className="flex-container-left">
                    <div className="content-icon">✦</div>
                        <div className="content">
                        {t('style-evolves-1', props.language)}
                        <a onClick={() => {props.changeTab(Tabs.Portfolio)}}>{t("portfolio-link", props.language)}</a>
                        {t('style-evolves-2', props.language)}
                        <a href={pixivLink}>{t("pixiv-link", props.language)}</a>
                        {t('style-evolves-3', props.language)}
                    </div>
                </div>      
            </div>
            <div className="panel">
                <h3 className="content">{t('cancellation', props.language)}</h3>
                {
                    ['need-to-cancel','if-work-started', 'cancellation-not-attributanble']
                    .map((item, index) => 
                        <div className="flex-container-left" key={"flex-container-left-" + index.toString()}>
                            <div className="content-icon">✦</div>
                            <h4 className="content">{t(item, props.language)}</h4>
                        </div>
                    )
                }
            </div>
            <div className="panel">
                <h3 className="content">{t('payment-methods', props.language)}</h3>
                {
                    t('payment-method-items', props.language).map((item, index) => 
                        <>
                        <div className="flex-container-left" key={'payment-method-items' + index.toString()}>
                            <img className="platform-icon" src="https://dl.dropboxusercontent.com/scl/fi/4jm2g12r10i1szg0xpnkm/circle-check.svg?rlkey=5p98pj08p24lu27gwlcqf0sa9&st=90v1dk6g&dl=0"/>
                            <h4 className="commission-content-likable">{item['method']}</h4>
                        </div>
                        <h4 className="content">{item['description']}</h4>
                        </>
                    )
                }
                <div className="divider">✦ ✦ ✦ ✦ ✦</div>
                {
                    ['make-payment-deadline','late-payment-reason']
                    .map((item, index) => 
                        <div className="flex-container-left" key={"flex-container-left-" + index.toString()}>
                            <div className="content-icon">✦</div>
                            <h4 className="content">{t(item, props.language)}</h4>
                        </div>
                    )
                }
            </div>
        </>
        
    )
}