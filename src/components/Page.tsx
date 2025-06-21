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
    changeTab: Function;
    viewImage: Function;
}

export default function Page(props: IPage) {

    function selectPage() {
        switch(props.currentPage) {
            case Tabs.Portfolio:
                return <Portfolio language={props.language} isMobile={props.isMobile} viewImage={props.viewImage}/>;
            case Tabs.Commission:
                return <Commission language={props.language} isMobile={props.isMobile}/>;
            case Tabs.Contact:
                return <Contact language={props.language} isMobile={props.isMobile} changeTab={props.changeTab}/>;
            case Tabs.Prices:
                return <Prices language={props.language} isMobile={props.isMobile} viewImage={props.viewImage}/>
            default:
                return <Home language={props.language} isMobile={props.isMobile} changeTab={props.changeTab}/>;
        }
    }

    return (
        <div className='page'> 
            {selectPage()}
        </div>
    )
}