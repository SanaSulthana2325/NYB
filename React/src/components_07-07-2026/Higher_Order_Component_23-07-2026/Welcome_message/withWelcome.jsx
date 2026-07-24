const withWelcome = (WrappedComponent) => {
  return function(props) {
    return (
      <>
        <h1>Welcome to React!</h1>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withWelcome;

// import React from "react";
// function App (){
//   return(
//     <>
    
//     </>
//   )
// }
// export default App

// const EnhanchedComponent= withComponent(Component);


// function withSomething(WrappedComponent){
//   return function EnhancedComponent(props){
//     return <WrappedComponent{...props}/>;
//   };
// }