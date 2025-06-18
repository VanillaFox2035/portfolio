import { useEffect, useState } from 'react'
import './App.css'
import { Languages, Tabs } from './define/Types';
import Page from './components/Page';
import { Translator as t }from './i18n/Translator';

function App() {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [tab, setTab] = useState<Tabs>(Tabs.Home)
  const [language, setLanguage] = useState<Languages>(Languages.En);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function onWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', onWindowSizeChange);
    return () => {
      window.removeEventListener('resize', onWindowSizeChange);
    }
  }, []);
  const isMobile = width <= 768;

  function onChangeLanguage(language: string) {
    switch(language) {
      case 'cht':
        setLanguage(Languages.Cht);
        break;
      default:
        setLanguage(Languages.En);
        break;
    }
  }

  function changeTab(tab: Tabs) {
    setTab(tab);
    setIsMenuOpen(false);
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
            <img className='header-hamburger' src='/icon/Hamburger.svg' onClick={() => {setIsMenuOpen(true)}}/>
            <img className='header-logo-center' src="/icon/Logo.png"/>
          </div>
          <hr/>
          <Page currentPage={tab} language={language} isMobile={isMobile} setTab={setTab}/>
          {isMenuOpen && <div className='hamburger-menu'>
            <br/>
            <img className='hamburger-menu-close' src='/icon/X-Symbol.svg' onClick={() => setIsMenuOpen(false)}/>
            <h2>{t('navigate', language)}</h2>
            {getNavigationButtons(false)}
            <br/>
            <h2>{t('language', language)}</h2>
            <div className='hamburger-menu-language-option' onClick={() => {setLanguage(Languages.En)}}>
              <img src={t('language-icon', Languages.En)}/>
              <div className='header-item'>English</div>
            </div>
            <div className='hamburger-menu-language-option' onClick={() => {setLanguage(Languages.Cht)}}>
              <img src={t('language-icon', Languages.Cht)}/>
              <div className='header-item'>繁體中文</div>
            </div>
            </div>}
        </>
      : 
        // Desktop Layout
        <>
          <div className='header'>
            <img className='header-logo' src="/icon/Logo.png" onClick={() => {changeTab(Tabs.Home)}}/>
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
          <Page currentPage={tab} language={language} isMobile={isMobile} setTab={setTab}/>
        </>
      }
    </>
  )
}

export default App
