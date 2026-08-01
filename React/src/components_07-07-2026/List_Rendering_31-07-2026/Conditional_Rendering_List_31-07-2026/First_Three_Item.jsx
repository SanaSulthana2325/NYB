import React from 'react'

function First_Three_Item() {
    const fruits =["Apple","Banana","Mango","Orange","Cherry","waterMelon","Grapes"];
  return (
    <>
    <h2> top 3 fruits</h2>
    {fruits.map((fruit, index)=>
        index < 3 ?(
            <p key = {index}>{fruit}</p>

        ): null
    )}
    
    </>
  );
}

export default First_Three_Item