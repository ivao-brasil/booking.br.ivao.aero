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

## Installation

A simple demo of the system in action.

- [ ] Have a Github organization setup for your division. [Github Docs: Creating a new organization](https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch)
- [ ] Fork this repository to your IVAO Organization. Note: make sure you only fork it to a IVAO related account due to NDA obligations.
- [ ] Create your subdomain for client. We strongly recomend you use this pattern url: `booking.{XX}.ivao.aero`, also add a redirect domain
- [ ] Enable Github Actions in the Actions tab.
- [ ] Add at least the required environment variable in your repo's secrets in the settings page.


### Environment variables
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
- Add other languages support. [Current Supported Languages](#currentlySupportedLanguages)
- Enforce a code pattern within all codebase.
- Add Xplane 12 scenery container


## Core development team
Currently, the KRONOS development is led by a small dedicated team at IVAO BR Division. They guide the project's development, define priorities, and review external contributions. The core team will not be restricted to the IVAO BR web team only. We understand that any contributor with decent engagement in the project should also become a core team member. On the other hand, we request that applications are made only after filling in the requirements below.

### Core team members
- [@joelson-c](https://github.com/joelson-c)
- [@ruymon](https://github.com/ruymon)

### Core team requirements
- [ ] Has had a decent engagement and contribution history
- [ ] Understand the codebase architecture
- [ ] Is an active IVAO Staff member with a valid NDA
- [ ] Has a deep understanding of the code review process and the current branch system
- [ ] Has knowledge of the stack used 

### Core team application process
If you feel you are a suit for the core team, feel accessible to ping @Web on Discord, and we will be happy to chat! 🙂


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
KRONOS implements out of the box the i18n pattern which detects the current users location and provides him a json file throughout the whole application. We find it important to add other languages overtime to our codebase to guarantee full coverage of IVAO's diverse user base. To create a translation checkout this [step by step documentation](#creatingATranslation).

### <a name="currentlySupportedLanguages" /> Currently supported languages

| Language              | [i18n code](https://www.andiamo.co.uk/resources/iso-language-codes/) | status            | acknowledgement                      | since         |
| --------------------- | -------------------------------------------------------------------- | ----------------- | ------------------------------------ | ------------- |
| Brazilian Portuguese  | `pt-BR`                                                              | ☑ merged/stable  | core team                            | `v1.0 - BETA` |
| English               | `en-EN`                                                              | ☑ merged/stable  | core team                            |`v1.0 - BETA`  |
| French                | `fr-FR`                                                              | ☑ merged/stable  | [@belmeg](https://github.com/belmeg) [@JordanKirkby](https://github.com/JordanKirkby)| `v1.1 - BETA` |
| Spanish               | `es-ES`                                                              | 🟪 merged/testing | [@joaotr3ze](https://github.com/joaotr3ze)  [@jesusadrianmartinez](https://github.com/jesusadrianmartinez) | `v1.2 - BETA` |
| German                | `de-DE`                                                              | 🟪 merged/testing | [@aldobenitez](https://github.com/aldobenitez)| `v1.2 - BETA` |
| Italian               | `it-IT`                                                              | 🆘 to be done    |                                      |               |

### <a name="creatingATranslation" /> Creating a translation
KRONOS was built to support multiple languages, in addition it is also very expandable and easy to add new translations. This process is done in a couple of steps as shown bellow.

> ⚠️  Before we start: Make sure you are in your divisions forked repo. You are unable to edit files in the brazilian core codebase.

1. Once in your forked repo, [create a new branch](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/making-changes-in-a-branch/managing-branches#creating-a-branch) based on the main branch and name it `feat/xxTranslation`. Keep in mind `xx` is a placeholder for the language code. See [IETF Language Codes](https://en.wikipedia.org/wiki/IETF_language_tag) for correct naming procedure. For example, if I am creating a russian translation I'd name my branch `feat/ruTranslation`.

2. After setting up a parallel branch, open the repo and locate the `../src/i18n/locales/` folder and duplicate the `en.ts` file. This will be the boilerplate for your translation. Next, rename the `en-copy.ts` to the language you will be translating. Once again, for demonstration purposes, if I am creating a russian translation I'd rename this file to `ru.ts`. It is verry important to point out that not always the code will be a duplicate os the language's initials, hence why we strongly recommend you verify the correct [IETF Language Codes](https://en.wikipedia.org/wiki/IETF_language_tag).

3. Open the recently created and renamed file and rename the const variable on line 3 to represent your new language. Example: `const ruRUTranslations` if you were translating to Russian. For simplicity sakes we will use Russian for the rest of the tutorial.

**Example:**

> 📝 See the example bellow to understand the variable renaming process.

```js 

// BEFORE:

import { Translations } from "types/Translations";

const enTranslations: { translations: Translations } = { // 👈 Change this 
  translations: {
    // Translations here
  },
};

export default enTranslations; // 👈 Change this 


// AFTER:

import { Translations } from "types/Translations";

const ruTranslations: { translations: Translations } = {
  translations: {
    // Translations here
  },
};

export default ruTranslations;
```


4. After exporting your translation, open the `index.ts` file in the `../src/i18b/locales/` directory to import and invoke your newly created translation.

> 📝 Check the example bellow.

```js
import ptTranslations from './pt'
import enTranslations from './en'
import frTranslations from './fr' // add line below
import ruTranslations from './ru'// 👈 Import your translation file like so.

const resources = {
  'pt': ptTranslations,
  'en': enTranslations,
  'ru': ruTranslations,  // 👈 Invoke your translation by adding a line like this.
  'fr': frTranslations  // ⚠ Make sure formatting stays the same. Last items don't have commas.
}

export default resources
```

5. You have done the easy part 🎉, now you have to complete your translations in your newly created translation file. The translation file is based on a key: value structure. You must **never** change the key, only the value.

> 📝 Key and value structure example.

```ts
import { Translations } from "types/Translations";

const ruTranslations: { translations: Translations } = {
  translations: {
    key: 'value' // Only edit the value inside the quotes.
  },
};

export default ruTranslations;

``` 

**Note:** Sometimes you will see this `{{  count  }}` syntax in between the text. This is a placeholder for a variable and it must **never** be edited. Also, sometimes, you will have keys that are accompanied by a `_one` or `_other` suffix. This is a syntax for when the translation should be singular or plural.

6. Once completed, make sure to read your work and verify for typos or context. Once you are confident, create a pull request to the official codebase and wait for review.
