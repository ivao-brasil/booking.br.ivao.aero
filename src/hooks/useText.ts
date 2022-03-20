import { useTranslation } from 'react-i18next';
import { Translations } from 'types/Translations';

type NestedKeyOf<ObjectType extends object> =
    {[Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`
    }[keyof ObjectType & (string | number)];

export function useText() {
    const { t } = useTranslation();

    return {
        t: (translationPath: NestedKeyOf<Translations> | Array<NestedKeyOf<Translations>>, ...args: any) => t(translationPath, ...args)
    };
}
