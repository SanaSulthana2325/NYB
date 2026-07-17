import { useContext } from "react";
import { UserContext } from "../../../../pages_07-07-2026/Task5_Pages_17-07-2026/Task5_page";

function Child() {
  const user = useContext(UserContext);

  return <h3>Welcome {user}</h3>;
}

export default Child;