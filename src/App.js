import React from "react";
import ToDo from "./ToDo";
import { useEffect, useState } from "react";
 
function App() {
const [toDo, setToDo] = useState({});
useEffect(() =>{
 async function getToDo (){
 const  response = await fetch("https://jsonplaceholder.typicode.com/todos/69");

 const data = await response.json();
 setToDo(data);   
}
  getToDo();
 },[])
 
 
 return (
    <>
    <ToDo {...toDo}/>
    </>
 )};

export default App;
