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
  if (!isMobile) setIsMenuOpen(false);

  function onChangeLanguage(language: string) {
    switch(language) {
      case 'en':
        setLanguage(Languages.En);
        break;
      case 'cht':
        setLanguage(Languages.Cht);
        break;
      default:
        setLanguage(Languages.En);
        break;
    }
  }  

  return (
    <>
      {
      isMobile ? 
        // Mobile Layout
        <>
          <div className='header'>
            <div className='header-item-center'>VanillaFox</div>
          </div>
          <hr/>
          <Page currentPage={tab} language={language}/>
        </>
      : 
        // Desktop Layout
        <>
          <div className='header'>
            <div className='header-item' onClick={() => {setTab(Tabs.Home)}}>VanillaFox</div>
            <div className='header-push-right' onClick={() => {setTab(Tabs.Home)}}>{t('header-home', language)}</div>
            <div className='header-item' onClick={() => {setTab(Tabs.Portfolio)}}>{t('header-portfolio', language)}</div>
            <div className='header-item' onClick={() => {setTab(Tabs.Commission)}}>{t('header-commission', language)}</div>
            <div className='header-item' onClick={() => {setTab(Tabs.Contact)}}>{t('header-contact', language)}</div>
            <select className='header-language-select' onChange={(e) => {
                onChangeLanguage(e.target.value);
            }}>
                <option value='en'>English</option>
                <option value='cht'>繁體中文</option>
            </select>
          </div>
          <hr/>
          <Page currentPage={tab} language={language}/>
        </>
      }
    </>
  )
}

export default App
