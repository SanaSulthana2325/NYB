import { useContext } from "react";
import LanguageContext from "../Language_Selector_13-07-2026/LanguageContext";

function Contact2() {

  const { language } = useContext(LanguageContext);

  return (

    <h2>

      {language === "English"

        ? "Contact"

        : " Sampark NO"}

    </h2>

  );

}

export default Contact2;