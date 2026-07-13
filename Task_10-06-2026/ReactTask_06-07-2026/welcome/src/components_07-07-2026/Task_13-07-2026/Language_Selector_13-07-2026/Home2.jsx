import { useContext } from "react";
import LanguageContext from "../Language_Selector_13-07-2026/LanguageContext";

function Home2() {

  const { language } = useContext(LanguageContext);

  return (

    <h2>

      {language === "English"

        ? "Home"

        : "Ghar"}

    </h2>

  );

}

export default Home2;