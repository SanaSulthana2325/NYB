
import AuthLayout from "./AuthLayout";
import DashBoard from "../Higher_Order_Component/DashBoard";

function Composition_App() {

  return (
    <>
      <h1>Component Composition Example</h1>

      <AuthLayout isLoggedIn={true}>
        <DashBoard />
      </AuthLayout>
    </>
  );
}

export default Composition_App;