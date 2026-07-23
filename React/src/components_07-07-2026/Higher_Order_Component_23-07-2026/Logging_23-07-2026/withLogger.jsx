function withLogger(Component) {

  return function(props) {

    console.log("Component Rendered");

    return <Component {...props} />;
  };
}

export default withLogger