/* eslint-disable react/prop-types */
import { useState } from "react";
function User(props){
    const[count] = useState(0);
    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h2>Name: {props.name}</h2>
            <h2>Location:Dehradun</h2>
            <h2>Contact : Akhileshramola.2000@gmail.com</h2>
        </div>

    )
}

 export default User;