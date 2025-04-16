
import { useRouteError } from "react-router-dom";
import React from 'react'
function Error(){
    const err = useRouteError();
    console.log(err);
    
    return <div>
        <h2>OOPS</h2>
        <p>Something went wrong</p>
        <p>{err.data}</p>
    </div>
}

export default Error;

