function withStyle(Component){

   return function(props){

      return(

<div className="bg-blue-500 text-white p-8 rounded-xl shadow-xl text-center">

<Component {...props}/>

</div>

      )

   }

}

export default withStyle;