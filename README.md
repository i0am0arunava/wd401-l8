# WD401 Level-8 Submission Documentation

## Dynamic Content Translation:

- Implement a system for translating dynamic content within the React.js application. This involves creating language files or dictionaries that store translations for different languages.
- Integrate a mechanism to dynamically switch between languages based on user preferences or system settings. Apply translation to various components, text elements, and messages throughout the application to ensure a seamless multilingual user experience.

### Introduction

The Dynamic Content Translation feature enables the translation of text content within a React.js application, allowing for a multilingual user experience.

#### Steps to Implement

1. **Setup i18n Library**: Install and configure an i18n library for React.js. Popular choices include react-i18next, react-intl, or i18next, i18next-browser-languagedetector
2. **Create Language Files or Dictionaries**: Define language files or dictionaries that store translations for different languages. These files should contain key-value pairs where keys represent the original text in the default language, and values represent translations in other languages.

`en.json: English translation`

```json
{
    "translation": {
      "Sports": "Sports",
      "Basketball": "Basketball",
      "Live": "Live",
      "Table Tennis": "Table Tennis",
      "Excitement and Drama in Unforgettable Match": "Excitement and Drama in Unforgettable Match",
      "Read more": "Read more",
      "My Choice": "My Choice",
      "Rugby": "Rugby",
      "Field Hockey": "Field Hockey",
      "Cricket": "Cricket",
      "FAVOURATE SECTION": "FAVOURATE SECTION"
    }
  }
  
```

`es.json: Spanish Translation`

```json
{
    "translation": {
      "Sports": "Deportes",
      "Basketball": "Baloncesto",
      "Live": "En vivo",
      "Table Tennis": "Tenis de mesa",
      "Excitement and Drama in Unforgettable Match": "Emoción y drama en un partido inolvidable",
      "Read_more": "Leer más",
      "My_Choice": "Mi elección",
      "Select_Sport":"Seleccionar deporte",
      "Select_Team" : "Selecciona un equipo",
      "American Football":"Fútbol americano",
      "Rugby": "Rugby",
      "Field Hockey": "Hockey sobre césped",
      "Cricket": "Críquet",
      "FAVOURATE_SECTION": "SECCIÓN FAVORITA",
      "All_News":"Todas las noticias",
      "Sign Up": "Registrarse",
      "Sign in": "Iniciar sesión",
      "Profile": "Perfil"

    }
  }
  
```

`de.json: Germany Translation`

```json
{
    "translation": {
      "Sports": "Sport",
      "Basketball": "Basketball",
      "Live": "Live",
      "Table Tennis": "Tischtennis",
      "Excitement and Drama in Unforgettable Match": "Spannung und Drama in einem unvergesslichen Spiel",
      "Read_more": "Weiterlesen",
      "My_Choice": "Meine Wahl",
      "Select_Sport":"Select_Sport",
      "Select_Team" : "Team auswählen",
      "Sign Up": "Registrieren",
      "Sign in": "Anmelden",
      "Profile": "Profil",
      "Rugby": "Rugby",
      "Field Hockey": "Feldhockey",
      "Cricket": "Cricket",
       "All_News":"Alle Nachrichten",
      "FAVOURATE_SECTION": "LIEBLINGSBEREICH"
      
    }
  }
  ```

3. **Integrate i18n Library**: Integrate the chosen i18n library into your React.js application. This typically involves initializing the i18n instance, loading language files, and setting the default language.

```ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enJSON from "./locale/en.json";
import esJSON from "./locale/es.json";
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      en: { ...enJSON },
      es: { ...esJSON },
    },
    fallbackLng: "en",
  });
```

4. **Implement Language Switching Mechanism**: Create a mechanism to dynamically switch between languages based on user preferences or system settings.

```jsx

                  <Switch
                    checked={currentLanguage === "en"}
                    onChange={() => {
                      i18n.changeLanguage(currentLanguage === "en" ? "es" : "en");
                    }}
                    className={`${
                      currentLanguage === "es" ? "bg-slate-400" : "bg-slate-700"
                    }  relative inline-flex h-[20px] w-[55px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}

                  >
                    <span
                      className={`${
                        currentLanguage === "es" ? "translate-x-9" : "translate-x-0"
                      }   pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>
```

5. **Apply Translation to Components**: Apply translation to various components, text elements, and messages throughout the application.

```tsx
 <div className="match-name">{t(`${match.sportName}`)}</div>

              <div className="match-team">

                <div key={match.id} >
                  <MatchCard match={match.id} />
                </div>

 </div>
```

![Screenshot 2024-06-25 124129](https://github.com/i0am0arunava/i18n/assets/141677292/2aceb3fd-0aef-484b-85e1-b4cdf1dd439e)


![Screenshot 2024-06-25 124253](https://github.com/i0am0arunava/i18n/assets/141677292/418b78ea-056a-46c0-bfc9-765526ae3bf3)


## Date and Time Localization:

- Localize date and time formats to accommodate different cultural preferences. Consider the variations in date formats (e.g., MM/DD/YYYY or DD/MM/YYYY) and time formats (12-hour vs. 24-hour clock).
- Utilize libraries or functions that handle date and time localization, ensuring that timestamps are presented in a format consistent with the user's locale.

### Date localisation

Date localisation involves formatting dates according to the conventions of a specific locale. In most programming languages, you can use built-in libraries or third-party libraries to handle date formatting. In JavaScript, we can make use of Intl.DateTimeFormat to format date and time.

```tsx
const date = new Date();

// Create a date formatter for a specific locale
const dateFormatter = new Intl.DateTimeFormat("fr-FR", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

// Format the date
const formattedDate = dateFormatter.format(date); // Example output: "27 septembre 2023"
```

### Time localisation

Localizing times involves formatting time values according to locale-specific conventions. You can use a similar approach as with date localisation, but this time focusing on time formatting.

```tsx
 const formattime = (
    isoDate: string,
    t: (key: string) => string,
    i18n: any
  ) => {
    const dateObj = new Date(isoDate);

    let localeObject;
    switch (i18n.language) {
      case "es":
        localeObject = "fr-ES";
        break;
      case "de":
        localeObject = "de-DE";
        break;
      default:
        localeObject = "en-US";
    }

    const timeFormatter = new Intl.DateTimeFormat("de-DE", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });

    const formattedTime = timeFormatter.format(dateObj);
    return formattedTime;
  };
  
```

`task.tsx`

```tsx
const formatDateForPicker = (
  isoDate: string,
  t: (key: string) => string,
  i18n: any
) => {
  const dateObj = new Date(isoDate);

  let localeObject;
  switch (i18n.language) {
    case "es":
      localeObject = "fr-ES";
      break;
    default:
      localeObject = "en-US";
  }

  const dateFormatter = new Intl.DateTimeFormat(localeObject, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedDate = dateFormatter.format(dateObj);
  return formattedDate;
};
//Rest of the code
```

```tsx
    <div className="mb-2">
                            <i>{t(`${article.title}`)}</i>
                          </div>

                          <div className="mb-2">
                            <i> {formattime("2023-08-01T12:08:33.811Z", t, i18n)}</i>
                            <br />
                            <i> {formatDateForPicker("2023-08-01T12:08:33.811Z", t, i18n)}</i>
                          
                          </div>
                          <div className="read-more-button">
                            <Link to={`News/${article.id}`}>{t("Read_more")}</Link>
                          </div>
                          {isuser ? <div className="favite" onClick={() => userlove(article.id)}>
                            {lovearry.includes(article.id) ? <MdFavorite /> : <MdOutlineFavoriteBorder />}

);
```

- English Date Time Format

![Screenshot 2024-06-25 130706](https://github.com/i0am0arunava/i18n/assets/141677292/fe04db00-14db-40cc-ab54-3c2a0caad7c9)


- Spanish Date Time Format

![Screenshot 2024-06-25 124742](https://github.com/i0am0arunava/i18n/assets/141677292/ddca17b0-868f-44ce-b5df-ba986040d22d)


- German Date Time Format
  
![Screenshot 2024-06-25 124629](https://github.com/i0am0arunava/i18n/assets/141677292/26dfb138-0d3f-4582-ab25-57eb166fac8e)


## Locale Switching:

- Implement a user interface (UI) component or a settings panel that allows users to select their preferred language/locale.
- Enable the application to respond dynamically to locale changes, updating content and formatting according to the selected locale.
- Ensure that the locale switch is persistent across sessions, providing a smooth and personalized experience for users who want to interact with the application in their preferred language.

### Introduction:

Locale switching is a crucial feature in internationalization and localization (i18n and l10n) processes, enabling users to interact with applications in their preferred language or region. This documentation outlines the implementation and usage of locale switching within a React.js application.

### Implementation:

- User Interface Component:
  Implement a UI component for selecting the preferred language/locale. This component could be a dropdown menu, a list of flags representing different languages, or any other intuitive interface.
- Settings Panel:
  Integrate a settings panel where users can access the language/locale preferences. This panel should provide clear options for selecting the desired language.

`Appbar.tsx`

```tsx
import { useTranslation } from "react-i18next";

const userNavigation = [
  { name: "Profile", href: "#" },
  { name: "Sign out", href: "/logout" },
];

const Appbar = () => {
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };

  return (
    <>
      <Disclosure as="nav">
        {({ open }) => (
          <div>
            {/* Language Switcher */}
            <div>
              <Menu as="div">
                <Menu.Button>
                  {/* Display current language */}
                  {currentLanguage === "en"
                    ? "English"
                    : currentLanguage === "es"
                    ? "Spanish"
                    : "German"}{" "}
                </Menu.Button>

                {/* Language dropdown */}
                <Menu.Items>
                  <Menu.Item>
                    {({ active }) => (
                      <button onClick={() => changeLanguage("es")}>
                        Spanish
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button onClick={() => changeLanguage("gr")}>
                        German
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        )}
      </Disclosure>
    </>
  );
};

export default Appbar;
```

### Output

![Screenshot 2024-06-25 124330](https://github.com/i0am0arunava/i18n/assets/141677292/6acd6da2-9a76-4b15-969b-cdf64fcc9dda)

![Screenshot 2024-06-25 124358](https://github.com/i0am0arunava/i18n/assets/141677292/438b5d67-d5a2-411b-b900-a8da6defb8d0)



