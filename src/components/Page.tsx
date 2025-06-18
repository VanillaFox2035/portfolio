import { Languages, Tabs } from '../define/Types';
import './Page.css';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Commission from './Pages/Commission';
import Prices from './Pages/Prices';
import Contact from './Pages/Contact';

export interface IPage
{
    currentPage: Tabs;
    language: Languages;
    isMobile: boolean;
    setTab: Function;
}

export default function Page(props: IPage) {

    function selectPage() {
        switch(props.currentPage) {
            case Tabs.Portfolio:
                return <Portfolio language={props.language} isMobile={props.isMobile}/>;
            case Tabs.Commission:
                return <Commission language={props.language} isMobile={props.isMobile}/>;
            case Tabs.Contact:
                return <Contact language={props.language} isMobile={props.isMobile}/>;
            case Tabs.Prices:
                return <Prices language={props.language} isMobile={props.isMobile}/>
            default:
                return <Home language={props.language} isMobile={props.isMobile} setTab={props.setTab}/>;
        }
    }

    return (
        <div className='page'> 
            {selectPage()}
        </div>
    )
}