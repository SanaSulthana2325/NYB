import {useParams} from 'react-router-dom'

function Example2() {
//   <Routes>
//     <Route path="/Example2/:day" element={<Example2/>}/>
// </Routes>
  
  const {day} = useParams();
  return (
    <>
    <h2> Week:{day}</h2>
    </>
  )
}

export default Example2