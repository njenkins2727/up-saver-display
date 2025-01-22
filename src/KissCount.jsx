import { useState } from "react";

export default function KissCount(){
    const [kissCount, setKissCount] = useState(0);
    
    function handleCount(){
        setKissCount(prev => prev+1);
    }
    
    return(
        <div>
        <h3>Hello Ella</h3>
        <p>I will give you {kissCount} kisses</p>
        <button onClick={handleCount}>click here to increase kisses</button>
        </div>
    );
};


