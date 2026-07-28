function withStatus(Component) {

  return function EnhancedComponent(props) {

    return (

      <div className="border-2 border-green-500 rounded-xl p-6 shadow-lg bg-white">

        <div className="bg-green-500 text-white px-3 py-1 rounded-full inline-block mb-4">
          Active Employee
        </div>

        <Component {...props} />

      </div>

    );

  };

}

export default withStatus;