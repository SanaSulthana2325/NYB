import { Navigate} from 'react-router-dom'

function Protected({children}) {
    const isLoggedIn = false;

    if(!isLoggedIn){
        return<Navigate to="/login"/>;
    }
  return children;
}

export default Protected