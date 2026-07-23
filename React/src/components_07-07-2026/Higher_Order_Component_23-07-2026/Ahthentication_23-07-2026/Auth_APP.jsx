import Dashboard from "./Dashboard"
import withAuth from "./withAuth"




const ProtectedDashboard = withAuth(Dashboard);
function Auth_APP(){
    return(
        <ProtectedDashboard/>
    );
}
export default Auth_APP;