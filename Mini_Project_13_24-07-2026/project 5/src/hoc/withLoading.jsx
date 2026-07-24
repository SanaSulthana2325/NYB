import Loader from "../components/Loader";

function withLoading(Component) {

  return function WrappedComponent(props) {

    if (props.loading) {

      return <Loader />;

    }

    return <Component {...props} />;

  };

}

export default withLoading;