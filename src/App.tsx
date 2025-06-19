import { useEffect, useState } from 'react'
import './App.css'
import { Languages, Tabs, langDictionary, tabDictionary, translateToString } from './define/Types';
import Page from './components/Page';
import { Translator as t }from './i18n/Translator';

function App() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [tab, setTab] = useState<Tabs>(Tabs.Home)
  const [language, setLanguage] = useState<Languages>(Languages.En);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Read url parameters
  const query = window.location.search;
  const params = new URLSearchParams(query);

  function onWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', onWindowSizeChange);
    const tabQuery: string = params.get('tab');
    const langQuery: string = params.get('lang');
    onChangeLanguage(langQuery);
    changeTab(tabDictionary[tabQuery]);
    return () => {
      window.removeEventListener('resize', onWindowSizeChange);
    }
  }, []);
  const isMobile = width <= 768;

  function onChangeLanguage(query: string) {
    let language = langDictionary[query];
    if (!language) language = Languages.En;
    params.set('lang', translateToString(language, langDictionary));
    console.log('Change language:', translateToString(language, langDictionary));
    updateUrlParams();
    setLanguage(language);
  }

  function changeTab(query: Tabs) {
    let tab = query;
    if (!tab) tab = Tabs.Home;
    params.set('tab', translateToString(tab, tabDictionary));
    console.log('Change tab:', translateToString(tab, tabDictionary));
    updateUrlParams();
    setTab(tab);
    setIsMenuOpen(false);
  }

  function updateUrlParams() {
    window.history.pushState({}, "", "?" + params.toString());
  }

  function getNavigationButtons(isToTheRight: boolean) {
    return (
      <>
        <div className={isToTheRight? 'header-push-right' : 'header-item'} onClick={() => {changeTab(Tabs.Home)}}>{t('header-home', language)}</div>
        <div className='header-item' onClick={() => {changeTab(Tabs.Portfolio)}}>{t('header-portfolio', language)}</div>
        <div className='header-item' onClick={() => {changeTab(Tabs.Commission)}}>{t('header-commission', language)}</div>
        <div className='header-item' onClick={() => {changeTab(Tabs.Prices)}}>{t('header-prices', language)}</div>
        <div className='header-item' onClick={() => {changeTab(Tabs.Contact)}}>{t('header-contact', language)}</div>
      </>
    );
  }

  return (
    <>
      {
      isMobile ? 
        // Mobile Layout
        <>
          <div className='header'>
            <img className='header-hamburger' src='/icon/hamburger.svg' onClick={() => {setIsMenuOpen(true)}}/>
            <img className='header-logo-center' src="/icon/logo.png"/>
          </div>
          <hr/>
          <Page currentPage={tab} language={language} isMobile={isMobile} changeTab={setTab}/>
          {isMenuOpen && <div className='hamburger-menu'>
            <br/>
            <img className='hamburger-menu-close' src='/icon/button-x.svg' onClick={() => setIsMenuOpen(false)}/>
            <br/>
            <br/>
            <h2>{t('navigate', language)}</h2>
            {getNavigationButtons(false)}
            <br/>
            <h2>{t('language', language)}</h2>
            <div className='hamburger-menu-language-option' onClick={() => {onChangeLanguage('en')}}>
              <img src={t('language-icon', Languages.En)}/>
              <div className='header-item'>English</div>
            </div>
            <div className='hamburger-menu-language-option' onClick={() => {onChangeLanguage('cht')}}>
              <img src={t('language-icon', Languages.Cht)}/>
              <div className='header-item'>繁體中文</div>
            </div>
            </div>}
        </>
      : 
        // Desktop Layout
        <>
          <div className='header'>
            <img className='header-logo' src="/icon/logo.png" onClick={() => {changeTab(Tabs.Home)}}/>
            {getNavigationButtons(true)}
            <img className='header-item-flag' src={t('language-icon', language)}/>
            <select className='header-language-select' onChange={(e) => {
                onChangeLanguage(e.target.value);
            }}>
                <option value='en'>English</option>
                <option value='cht'>繁體中文</option>
            </select>
          </div>
          <hr/>
          <Page currentPage={tab} language={language} isMobile={isMobile} changeTab={changeTab}/>
        </>
      }
    </>
  )
}

export default App
