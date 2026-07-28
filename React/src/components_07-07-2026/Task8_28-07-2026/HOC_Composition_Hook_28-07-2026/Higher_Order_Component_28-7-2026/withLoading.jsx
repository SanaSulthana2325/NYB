function withLoading(Component) {

  return function EnhancedComponent({loading, ...props}) {

    if(loading){
      return (
        <h2 className="text-xl text-red-500">
          Loading...
        </h2>
      );
    }

    return <Component {...props}/>;
  }
}

export default withLoading;