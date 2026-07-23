
import DashBoard from '../Higher_Order_Component/DashBoard';
import useAuth from './useAuth';

function Hook_App() {

  const isLoggedIn = useAuth();

  return (
    <>
      <h1>Hook Example</h1>

      {
        isLoggedIn
        ? <DashBoard />
        : <h2>Please Login First</h2>
      }
    </>
  );
}

export default Hook_App;