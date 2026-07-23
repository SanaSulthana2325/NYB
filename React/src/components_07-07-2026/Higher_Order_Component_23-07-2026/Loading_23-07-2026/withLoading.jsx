function withLoading(Component) {

  return function(props) {

    if (props.loading) {
      return <h2>Loading...</h2>;
    }

    return <Component {...props} />;
  };
}

export default withLoading;