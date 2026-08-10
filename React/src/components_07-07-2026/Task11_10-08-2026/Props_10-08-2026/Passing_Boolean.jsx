import React from 'react'

function Passing_Boolean(props) {
  return (
    <>
    <h2>
        {props.isLoggedIn ? 'Welcome User' : 'Please Login'}
    </h2>
    </>
  );
}

export default Passing_Boolean