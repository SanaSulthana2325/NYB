import { useContext } from "react";
import LanguageContext from "../Language_Selector_13-07-2026/LanguageContext";

function About2() {

  const { language } = useContext(LanguageContext);

  return (

    <h2>

      {language === "English"

        ? "About"

        : "Parichay"}

    </h2>

  );

}

export default About2;