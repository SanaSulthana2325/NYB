function withStyle(Component) {
  return function(props) {
    return (
      <div
        style={{
          backgroundColor: "lightblue",
          padding: "20px",
          border: "2px solid black",
          margin: "10px"
        }}
      >
        <Component {...props} />
      </div>
    );
  };
}

export default withStyle;