function withLoading(Component) {

  return function EnhancedComponent({ loading }) {

    if (loading) {
      return (
        <div className="flex justify-center items-center min-h-screen">
          <h1 className="text-blue-600 text-3xl font-bold">
            Loading...
          </h1>
        </div>
      );
    }

    return <Component />;
  };
}

export default withLoading;