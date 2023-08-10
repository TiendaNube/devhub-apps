import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// import { ELocale, Countries, ICountries } from "./i18n.types";

// const country = process.env.COUNTRY as keyof ICountries;

// Buscando as nossas traduções da pasta locales (nome e local da pasta é você quem decide)
import translations from "./locales";

const i18nConfig = {
  resources: translations, // resources são as nossas traduções
  fallbackLng: "pt-BR", // fallbackLng é o idioma padrão caso o browser não consiga detectar sozinho
  defaultNS: "translations", // defaultNS é o namespace padrão, podemos usar 'translations'
};

i18n
  .use(LanguageDetector) // Usa o detector de idioma do seu browser
  .use(initReactI18next) // Usa o pacote do i18n específico para React
  .init(i18nConfig); // Usa nossas configurações

export default i18n;

// i18n
//   .use(initReactI18next)
//   .use(Backend)
//   .init({
//     lng: Countries[`${country ?? "pt-BR"}`],
//     ns: "translations",
//     defaultNS: "translations",
//     load: "currentOnly",
//     fallbackLng: ELocale.BRAZIL,
//     supportedLngs: Object.values(ELocale),
//     backend: {
//       loadPath: `/locales/{{lng}}/{{ns}}.json?v=${pkg.version}`,
//       requestOptions: {
//         cache: "no-cache",
//       },
//     },
//     interpolation: {
//       escapeValue: false,
//     },
//   });

// i18n.services.pluralResolver.addRule(ELocale.BRAZIL, {
//   numbers: [1, 2],
//   plurals: (n: number) => {
//     return Number(n !== 1);
//   },
// });
