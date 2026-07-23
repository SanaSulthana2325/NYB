

function withLoading1(Component) {
  return function(props){
    if(props.loading){
        return <h2>Loadinhg ....</h2>;
    }
    return<Component{...props}/>;
  };
}

export default withLoading1;