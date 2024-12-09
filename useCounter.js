import { useState } from "react"


export const useCounter = (initialValue = 10) => {



    const [counter, setCounter] = useState(initialValue)

    const increment = () => { setCounter(counter + 1) };


    const decrease=()=>{
        if(counter===0)return;
        setCounter(counter -1)};

    const reset=()=>{setCounter(initialValue)};
    return {
        counter,
        increment,
        decrease,
        reset


    }
}