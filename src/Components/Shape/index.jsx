import React from "react";
import './Shape.css';
import imagen from '../../assets/Imagenes/imagen.png';



const Shape = ()=>{

    return(
        <div className="Shape" style={{backgroundImg:`url(${imagen})`}}>
          <img src={imagen} />
        </div>
    )
}

export {Shape}