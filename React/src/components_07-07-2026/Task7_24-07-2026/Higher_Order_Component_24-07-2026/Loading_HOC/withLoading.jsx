function withLoading(Component){

return function({loading,...props}){

if(loading){

return(

<div className="flex justify-center items-center h-screen">

<div className="text-3xl font-bold text-blue-600">

Loading...

</div>

</div>

)

}

return <Component {...props}/>

}

}

export default withLoading;