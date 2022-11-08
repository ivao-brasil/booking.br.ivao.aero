![Logo](https://imgur.com/cCHAe36.png)

# KRONOS - Booking Client

The client side of KRONOS, the ultimate tool for RFE, MSE, RFO events in IVAO. Built like a tank with a great developer experience.

## Features

- Themes - Dark & Light
- Multiple Events at the same time
- Clean and modern UI
- UpToDate developement stack
- Contribuition System
- Multiple Languages
- Suspension System
- Flight confirmation flow


## Demo

A simple demo of the system in action.

![Demo](https://imgur.com/8uts6Ec.png)
## Environment variables

## Installation

A simple demo of the system in action.

- [ ] Have a Github organization setup for your division. [Github Docs: Creating a new organization](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)
- [ ] Fork this repository to your IVAO Organization. Note: make sure you only fork it to a IVAO related account due to NDA obligations.
- [ ] Create your subdomain for client. We strongly recomend you use this pattern url: `booking.{XX}.ivao.aero`, also add a redirect domain
- [ ] Enable Github Actions in the Actions tab.
- [ ] Add at least the required environment variable in your repo's secrets in the settings page.
- [ ] 

To run this project, you will need to add the following environment variables to your forked repository secrets.

| Secret variable name                     | example value                        | use case                                                                  | required |
| ---------------------------------------- | ------------------------------------ | ------------------------------------------------------------------------- | ---------|
| `PRODUCTION_FTP_HOST`                    | `ftp.{XX}.ivao.aero`                 | Tells the CI/CD flow the server it will transfer files to. Keep in mind IVAO's divisional servers have a standard url pattern. | ☑ |
| `PRODUCTION_FTP_USER`                    | `booking@booking.{XX}.ivao.aero`     |                                                                           | ☑
| `PRODUCTION_FTP_PASSWORD`                | A hash password. We strongly recommend you use the generated password from cPanel. |                                                                           | ☑
| `PRODUCTION_API_HOST`                    | `https://api.booking.{XX}.ivao.aero` | Informs the application the path for the back-end of the system, the API. | ☑        |
| `PRODUCTION_REACT_APP_LOGO_URL`          | The url of the division's logo. Preferably in SVG. | Informs the application the logo it should use. It fallbacks to the Brazilian division logo | ❌ |
| `PRODUCTION_REACT_ANALYTICS_TRACKING_ID` | `UA-000000-2` | Generated in Google Analytics to tell Analytics which account and property to send data to. | ❌ |
| `REACT_APP_LOGO_SIDEBAR_LIGHT`           | The url of the division's symbol logo (the small IVAO Icon with flag). Preferably in SVG. |  Informs the application the logo it should use in the sidebar while in light mode. It fallbacks to the Brazilian division logo | ❌ |
| `REACT_APP_LOGO_SIDEBAR_DARK`            | The url of the division's symbol logo (the small IVAO Icon with flag). Preferably in SVG. |  Informs the application the logo it should use in the sidebar while in dark mode. It fallbacks to the Brazilian division logo | ❌ |


## Roadmap
This is a ongoing project, with big space for enhancement. In the other hand, the core team is unable to develop this project solo. We count you other divisions to help maintain, develop and imporve this system. Check some requests bellow and if you wish to contribute, check the [Contribute Section]()

- Improve browser support
- Improve bording pass component 
- Improve mobile version support
- Add a choose language option
- Add theme variations options
- Enhance the Flight Filter Component
- Add a dedicated changelog in the system.
- Add other languages support. [Current Supported Languages]()
- Enforce a code pattern within all codebase.
- Add Xplane 12 scenery container


## Core developement team

- [@joelson-c](https://github.com/joelson-c)
- [@ruymon](https://github.com/ruymon)


## Instalação

Instale my-project com npm

```bash
  npm install my-project
  cd my-project
```
    
## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Currently used by

KRONOS suit is up and running in the following divisions:

- [IVAO Brazil](http://kronos.br.ivao.aero/)
- [IVAO Portugal](https://kronos.pt.ivao.aero/)
- [IVAO Algeria](https://booking.dz.ivao.aero/)
- [IVAO North America](https://booking.xa.ivao.aero/)

## Translations
KRONOS implements out of the box the i18n pattern which detects the current users location and provides him a json file throughout the whole application. We find important to, each time more, have other languages in our codebase to guarantee full coverage of IVAO's diverse user base. 

| Language              | [i18n code](https://www.andiamo.co.uk/resources/iso-language-codes/) | status            | acknowledgement                      | since         |
| --------------------- | -------------------------------------------------------------------- | ----------------- | ------------------------------------ | ------------- |
| Brazilian Portuguese  | `pt-BR`                                                              | ☑ merged/stable  | core team                            | `v1.0 - BETA` |
| English               | `en-EN`                                                              | ☑ merged/stable  | core team                            |`v1.0 - BETA`  |
| French                | `fr-FR`                                                              | ☑ merged/stable  | [@belmeg](https://github.com/belmeg) [@JordanKirkby](https://github.com/JordanKirkby)| `v1.1 - BETA` |
| Spanish               | `es-ES`                                                              | 🆘 to be done    |                                      |               |
| German                | `de-DE`                                                              | 👷 In Progress   | [@aldobenitez](https://github.com/aldobenitez)|               |
| Italian               | `it-IT`                                                              | 🆘 to be done    |                                      |               |

## Translation Documentation
Translations are done in 4 easy to follow steps.  

- [ ] Go to `../src/i18n/locales/` folder and copy the en-us.ts file and rename to the language you will be translating [see Language Codes for correct naming procedure](https://www.andiamo.co.uk/resources/iso-language-codes/)
- [ ] On line 3 and the final line of your new language translation, change `const enUsTranslations` to represent your new language.  Example `const ruRUTranslations` if you were translating to Russian.  For simplicity sakes we will use Russian for the rest of the tutorial.

```js 
import { Translations } from "types/Translations";

const enUsTranslations: { translations: Translations } = { // 👈 Change this 
  translations: {
    // Translations here
  },
};

export default enUsTranslations; // 👈 Change this 
```

- [ ] In the `../src/i18b/locales/` folder, edit the index.ts file to add your newly created translation.

```js
import ptBrTranslations from './pt-br'
import enUsTranslations from './en-us'
import frFrTranslations from './fr-fr' // add line below
import ruRuTranslations from './ru-ru' // 👈 Like this 

const resources = {
  'pt-BR': ptBrTranslations,
  'en-US': enUsTranslations,
  'ru-RU': ruRuTranslations,  // 👈 Add line like this 
  'fr-FR': frFrTranslations  // 👈 Make sure formatting stays the same without a comma at the end
}

export default resources
```

- [ ] You have done the easy part, now you have to complete your translations in your newly created translation file.  The only translation in the whole file that should not be changed is `{{  count  }}` that appears twice in a row in this document.
- [ ] Once completed, create a merge request for review.
