function withAuthorization(Component) {

  const role = "Admin"; 

  return function(props) {

    if (role !== "Admin") {
      return <h2>Access Denied</h2>;
    }

    return <Component {...props} />;
  };
}

export default withAuthorization;