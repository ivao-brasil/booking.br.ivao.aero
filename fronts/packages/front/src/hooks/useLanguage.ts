export enum Language {
  ptBr = "pt-BR",
  enUs = "en-US",
}

export interface LanguageDefinition<T> {
  [Language.enUs]: T;
  [Language.ptBr]: T;
}

export const useLanguage = <T>(languageDefinition: LanguageDefinition<T>) => {
  const language: Language =
    (localStorage.getItem("language") as Language) || navigator.language;

  const languageData = languageDefinition[language];

  return { language, languageData };
};
