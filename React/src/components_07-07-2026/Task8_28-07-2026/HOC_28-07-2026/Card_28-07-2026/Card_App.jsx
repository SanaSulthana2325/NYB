import React from 'react'
import withCard from './withCard';
import User from './User';
import Product from './Product';

const UserCard = withCard(User);
const ProductCard = withCard(Product);


function Card_App() {
  return (
    <>
    <UserCard />

    <br/>
    <ProductCard/>
 

    </>
  )
}

export default Card_App