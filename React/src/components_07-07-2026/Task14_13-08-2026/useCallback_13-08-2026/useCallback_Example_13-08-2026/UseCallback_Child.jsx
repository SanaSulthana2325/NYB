import React from 'react'


const UseCallback_Child = React.memo(({ onClick}) => {
    console.log("Child Rendered");
    return <button onClick={onClick}
    className='bg-orange-500'>Child Button</button>
});
  

export default UseCallback_Child