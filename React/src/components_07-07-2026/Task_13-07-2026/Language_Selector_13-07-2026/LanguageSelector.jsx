import { useContext } from "react";
import LanguageContext from "../Language_Selector_13-07-2026/LanguageContext";

function LanguageSelector() {

  const { setLanguage } = useContext(LanguageContext);

  return (

    <div>

      <button onClick={() => setLanguage("English")}>
        English
      </button>

      <button onClick={() => setLanguage("Hindi")}>
        Hindi
      </button>

    </div>

  );

}

export default LanguageSelector;