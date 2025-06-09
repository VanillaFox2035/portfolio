import { Languages, Tabs } from '../define/Types';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Commission from './Pages/Commission';
import Contact from './Pages/Contact';

export interface IPage
{
    currentPage: Tabs;
    language: Languages;
}

export default function Page(props: IPage) {

    function selectPage() {
        switch(props.currentPage) {
            case Tabs.Home:
                return <Home/>;
            case Tabs.Portfolio:
                return <Portfolio/>;
            case Tabs.Commission:
                return <Commission/>;
            case Tabs.Contact:
                return <Contact/>;
            default:
                return <Home/>;
        }
    }

    return (
        <div> 
            {selectPage()}
        </div>
    )
}