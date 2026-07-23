const isLoggedIn = true;


function withAuth(Component) {
  return function(props){
    if(!isLoggedIn){
        return
        <h2>Please Login First</h2>
    }
    return<Component{...props}/>
  };
}

export default withAuth