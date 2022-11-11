import './iconButton.css';

function IconButton({icon, link}) {
    return ( 
        <div className="icon-button-container">
            <i style={{fontSize: '25px'}} className={icon} onClick={() => window.open(link, '_blank')}/>
        </div>
     );
}

export default IconButton;