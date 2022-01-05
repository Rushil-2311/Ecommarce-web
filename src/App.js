import React from "react";
import './App.css';

const Cards = (props) =>{
  
      
      return(
        <>
          <div className="new-bali">
         <img src={props.link}  alt="ypur poc" className="your-image"></img>
         <div className="inside-container">
           <h2>{props.name} 👍</h2>
           <p>{props.place}</p>
           <button>Delete</button>
           </div>
         </div>      
        </>      )
}

export default Cards;