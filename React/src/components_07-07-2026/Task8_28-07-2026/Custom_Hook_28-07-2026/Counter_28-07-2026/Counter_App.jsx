import useCounter from "./useCounter";

function Counter_App(){
    const{
        count,
        increase,
        decrease
    } = useCounter(10);
    return(
        <>
        <h1>Count:{count}</h1>
        <button onClick={increase}
        className="bg-orange-500">Increase</button>


        <button onClick={decrease}
        className="bg-green-500"> Decrease</button>
        </>
    );

}

export default Counter_App;