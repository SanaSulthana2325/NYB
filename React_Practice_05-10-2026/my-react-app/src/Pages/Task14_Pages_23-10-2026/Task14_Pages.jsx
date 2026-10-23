import React from 'react'
import Product from '../../Component/Task14_23-10-2026/Testing_23-10-2026/Component_Testing'
import { Add } from '../../Component/Task14_23-10-2026/Testing_23-10-2026/Vitest_Jest_23-10-2026/Math'
import Counter from '../../Component/Task14_23-10-2026/Testing_23-10-2026/React Testing Library/Counter'
import Employee from '../../Component/Task14_23-10-2026/Testing_23-10-2026/Rendering_Component/Employee'
import Emp1 from '../../Component/Task14_23-10-2026/Testing_23-10-2026/Testing_Prop/Emp1'
import Cart from '../../Component/Task14_23-10-2026/Testing_23-10-2026/Testing_State/Cart'
import AddToCart from '../../Component/Task14_23-10-2026/Testing_23-10-2026/Tesing_User_Interaction/AddToCart'
import CheckoutForm from '../../Component/Task14_23-10-2026/Testing_23-10-2026/Testing_Forms/CheckoutForm'
import EmailForm from '../../Component/Task14_23-10-2026/Testing_23-10-2026/Testing_Email/EmailForm'
import ProductStatus from '../../Component/Task14_23-10-2026/Testing_23-10-2026/Testing_Conditional_Rendering/ProductStatus'
//import Nav from '../../Component/Task14_23-10-2026/Testing_23-10-2026/Testing_Navigation/Nav'
import ProductList from '../../Component/Task14_23-10-2026/Testing_23-10-2026/Testing_API/ProductList'
import ProductsPage from '../../Component/Task14_23-10-2026/Testing_23-10-2026/Testing_Loading_Error/ProductsPage'
import ShoppingApp from '../../Component/Task14_23-10-2026/Testing_23-10-2026/Testing_Integration/ShoppingApp'

function Task14_Pages() {
  return (
    <>
    <Product/>
    <hr/>
    <br/>
    <Add/>
    <hr/>
    <br/>
    <Counter/>
    <hr/>
    <br/>
    <Employee/>
    <hr/>
    <br/>
    <Emp1/>
    <hr/>
    <br/>
    <Cart/>
    <hr/>
    <br/>
    <AddToCart/>
    <hr/>
    <br/>
    <CheckoutForm/>
    <hr/>
    <br/>
    <EmailForm/>
    <hr/>
    <br/>
    <ProductStatus/>
    <hr/>
    <br/>
    {/* <Nav/> */}
    <hr/>
    <br/>
    <ProductList/>
    <hr/>
    <br/>
    <ProductsPage/>
    <hr/>
    <br/>
    <ShoppingApp/>
    </>
  )
}

export default Task14_Pages