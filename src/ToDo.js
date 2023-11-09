import {useState} from 'react';
import React from 'react';


function ToDo (props) {
   const [runcuks, setRuncuks] = useState(props.completed)
function handleChange(event){
setRuncuks(event.target.checked);
}


    return (
        <>
  <p>name:{props.name}</p>
  <p>Id:{props.id}</p>
  <p>username{props.username}</p>
    <p>email{props.email}</p>
  <input type="checkbox" checked={runcuks} onChange={handleChange}></input>
  
   </>
       )};

    export default ToDo;