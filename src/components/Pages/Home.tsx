import type { Languages } from "../../define/Types";
import { Translator as t} from "../../i18n/Translator";
import "./../Page.css";

export interface IHome {
    language: Languages
}

export default function Home(props: IHome) {
    return (
        <>
            <div className="panel">
                <h2>香草狐狸 | Vanilla Fox</h2>
            </div>
            <div className="panel">
                <h2>{t('what-i-do', props.language)}</h2>
            </div>
            <div className="panel">
                <h2>{t('platforms', props.language)}</h2>
            </div>
        </>
    );
}