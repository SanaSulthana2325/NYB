import React from 'react'

function withAuth(Component) {
  return function EnhancedComponent({isLoggedIn}){
    if(!isLoggedIn){
        return<h2>Please Login first</h2>
    }
    return<Component/>
  };
}

export default withAuth