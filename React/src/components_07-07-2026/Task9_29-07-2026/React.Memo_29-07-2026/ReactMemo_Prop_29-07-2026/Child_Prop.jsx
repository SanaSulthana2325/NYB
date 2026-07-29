import React from 'react'

const Child_Prop = React.memo(function Child_Prop({name}){
    console.log("pink rendered");

    return (
    <div className='p-4 bg-purple-100 rounded-lg'>
        Hello{name}
    </div>
    );
}); 
  


export default Child_Prop