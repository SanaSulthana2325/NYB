function ChildA({message, sendData}){

    return(
        <>
            <h3>Child A</h3>

            <p>{message}</p>

            <button
            onClick={()=>sendData("Hello Parent, I am Sana Sulthana")}
            >
                Send Message
            </button>
        </>
    )
}

export default ChildA;