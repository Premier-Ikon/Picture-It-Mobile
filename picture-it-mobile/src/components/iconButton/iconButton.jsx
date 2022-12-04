import './iconButton.css';
import React from "react";

function IconButton({icon, link, style}) {
    return ( 
        <div className="icon-button-container" style={{cursor: 'pointer'}}>
            <i style={{fontSize: '25px'}} className={icon} onClick={() => window.open(link, '_blank')}/>
        </div>
     );
}

export default IconButton;