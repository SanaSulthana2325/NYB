import { useContext } from "react";
import { ThemeContext } from "../../../../pages_07-07-2026/Task5_Pages_17-07-2026/Task5_page";

function Home() {
  const theme = useContext(ThemeContext);

  return <h2>Current Theme : {theme}</h2>;
}

export default Home;