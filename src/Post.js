import {useEffect, useState} from "react";
import React from "react";
function post(props){
    return (
        <div>
            <p>Id: {props.Id}</p>
            <p>name: {props.name}</p>
            <p>username: {props.username}</p>
            <p>email: {props.email}</p>
        </div>
    )
}

export default post;