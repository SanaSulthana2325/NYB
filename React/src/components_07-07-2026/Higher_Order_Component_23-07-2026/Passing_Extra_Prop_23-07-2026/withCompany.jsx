function withCompany(Component) {

  return function(props) {

    return (
      <Component
        {...props}
        company="Tasan Ltd"
      />
    );
  };
}

export default withCompany;