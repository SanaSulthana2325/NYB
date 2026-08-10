import React from 'react'
import Header1 from './Header1'
import StudentCard from './StudentCard'
import Footer1 from './Footer1'

function Student_App() {
  return (
    <>
    <Header1/>
    <StudentCard name="Ali" course="Tally"/>
    <StudentCard name="Ayesha" course="Webpack"/>
    <StudentCard name="Fathima" course="React"/>

    <Footer1/>
    </>


  )
}

export default Student_App