import React,{useState} from 'react';



const App=()=>{
    let [counter,setCount]=useState(0)


let increment=()=>{
       setCount(counter+2)
}

       let decrement=()=>{
       setCount(counter-1)
}


let reset=()=>{
    setCount(counter*0)
}

return(
    
    <>
    <h3>Counter={counter}</h3>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>




    </>
)
}

export default App;





