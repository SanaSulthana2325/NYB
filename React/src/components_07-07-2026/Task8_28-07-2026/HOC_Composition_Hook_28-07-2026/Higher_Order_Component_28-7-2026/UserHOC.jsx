import withLoading from "./withLoading";


function User(){

  return (
    <div className="bg-blue-500 text-white p-5 rounded">
      <h2>User Name: Sana</h2>
      <p>Email: sana@gmail.com</p>
    </div>
  )
}


export default withLoading(User);