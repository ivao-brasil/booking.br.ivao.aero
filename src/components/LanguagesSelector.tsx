import resources from "i18n/locales";
import { FunctionComponent } from "react";
import { DropdownButton } from "./button/DropdownButton";
import i18next from "i18next";

export const LanguagesSelector:FunctionComponent = () => {

    return (<DropdownButton text="Languages">
        {Object.entries(resources).map(([key, value]) => (
            <button onClick={() => i18next.changeLanguage(key)} className="block w-full py-2 text-left hover:bg-gray-200">
                {value.nativeName} / {value.englishName}
            </button>
        ))}
    </DropdownButton>);
}
