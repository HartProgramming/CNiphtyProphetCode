import './CNFT.css';
import cnftArray from '../CNFTProjectData';
import CNFTCard from './CNFTCard';
import React from 'react'

function CNFT() {
    console.log(cnftArray[0])
   return(
       <div>
           <h1>Hi</h1>
           <CNFTCard project={cnftArray[0].project} marketcap={cnftArray[0].project} floor={cnftArray[0].number}/>
       </div>
   )

}

export default CNFT