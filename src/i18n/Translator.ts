import { Languages } from "../define/Types";
import { en, cht } from './Translation';


export function Translator(index: string, language: Languages): any {
    function selectLanguage(language: Languages): object {
        switch (language) {
            case Languages.En:
                return en;
            case Languages.Cht:
                return cht;
            default:
                return en;
        }
    }

    const languagePackage = selectLanguage(language);
    const tranlation = languagePackage[index];
    return tranlation;
}