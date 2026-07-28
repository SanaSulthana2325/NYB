import React from 'react'
import withAuth from './withAuth'
import Dashboard from './Dashboard'

const ProtectedDashboard = withAuth(Dashboard)
function Auth_App() {
  return (
    <>
    <ProtectedDashboard isLoggedIn={false}/>
    </>
  )
}

export default Auth_App