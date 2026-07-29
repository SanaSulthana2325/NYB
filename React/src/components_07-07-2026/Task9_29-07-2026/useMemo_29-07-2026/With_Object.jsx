import {useMemo} from'react';
function With_Object(){ 
const user = useMemo(
  () => ({
    name: "Sana",
    age: 22,
  }),
  []
);
return(
    <>
    <h2 className='font-bold'>User Details</h2>
    <p>Name:{user.name}</p>
    <p>Age:{user.age}</p>
    </>
)
}

export default With_Object;