import { useContext } from "react";
import LanguageContext from "../Language_Selector_13-07-2026/LanguageContext";

function Header2() {

  const { language } = useContext(LanguageContext);

  return (

    <h2>

      {language === "English"

        ? "Welcome"

        : "Swagat hai"}

    </h2>

  );

}

export default Header2;