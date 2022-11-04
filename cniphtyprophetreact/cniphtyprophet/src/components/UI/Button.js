import React from "react";

function Button(props){

    return(
        <>
         <button className={props.style}>{props.title}</button>
        </>
    )
}

export default Button;