import { useState } from "react";

function Profile() {

  const [name] = useState("Ayesha");

  return <h2>{name}</h2>;
}

            
export default Profile;