function withLoading1(Component) {
  return function (props) {

    if (props.loading) {
      return (
        <div className="flex flex-col items-center justify-center h-screen">

          <div className="w-16 h-16 border-4 border-green-700 border-t-transparent rounded-full animate-spin"></div>

          <h2 className="mt-4 text-xl font-semibold">
            Loading...
          </h2>

        </div>
      );
    }

    return <Component {...props} />;
  };
}

export default withLoading1;