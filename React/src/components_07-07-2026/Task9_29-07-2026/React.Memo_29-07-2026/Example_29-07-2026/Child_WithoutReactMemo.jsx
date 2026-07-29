import React from 'react'

function Child_WithoutReactMemo() {
  console.log("Child Rendered");
  return (
    <div className='p-4 bg-gold-200 rounded-lg'>
      Child Component
    </div>
  )
}

export default Child_WithoutReactMemo;