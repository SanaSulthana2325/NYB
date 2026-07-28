function withAuth(Component) {
  return function ProtectedComponent({ isLoggedIn }) {

    if (!isLoggedIn) {
      return (
        <div >
          <h1 className="text-3xl font-bold text-red-600">
            Please Login First
          </h1>
        </div>
      );
    }

    return <Component />;
  };
}

export default withAuth;