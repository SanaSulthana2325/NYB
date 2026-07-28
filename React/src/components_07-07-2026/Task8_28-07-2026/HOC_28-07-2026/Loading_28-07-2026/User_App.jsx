import React from 'react'
import withUser from './withUser'
import User from './User'
import Product from './Product'

const UserWithUser = withUser(User)

const ProductWithUser = withUser(Product)
function User_App() {
   return (
    <>
      <UserWithUser loading={false} />
      <ProductWithUser loading={true} />
    </>
    )
}


export default User_App