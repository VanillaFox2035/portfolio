import { Languages, Tabs } from '../define/Types';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Commission from './Pages/Commission';
import Contact from './Pages/Contact';
import './Page.css';

export interface IPage
{
    currentPage: Tabs;
    language: Languages;
    isMobile: boolean;
}

export default function Page(props: IPage) {

    function selectPage() {
        switch(props.currentPage) {
            case Tabs.Home:
                return <Home language={props.language}/>;
            case Tabs.Portfolio:
                return <Portfolio language={props.language}/>;
            case Tabs.Commission:
                return <Commission language={props.language}/>;
            case Tabs.Contact:
                return <Contact language={props.language}/>;
            default:
                return <Home language={props.language}/>;
        }
    }

    return (
        <div className='page'> 
            {selectPage()}
        </div>
    )
}