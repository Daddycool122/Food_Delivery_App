import { useEffect, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";
import {Provider} from "react-redux"
import appStore from "../utils/appStore";
import React from 'react'


function App(){
  const [userName,setUserName] = useState();
  useEffect(()=>{
    //Make an api call
    const data = {
      name: "Akhilesh"
    };
    setUserName(data.name)

  },[]);
  

  
  return(
    <Provider store={appStore}>
  <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
   <div className = "app">
    <Header/>
    <Outlet/>
    </div>
    </UserContext.Provider>
    </Provider>
  )
}


export default App;