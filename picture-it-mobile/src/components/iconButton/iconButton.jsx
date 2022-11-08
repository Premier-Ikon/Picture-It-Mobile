import './iconButton.css';

function IconButton({icon, link}) {
    return ( 
        <div className="icon-button-container">
            <i style={{color: 'rgb(47, 47, 47)', fontSize: '25px'}} className={icon} onClick={() => window.open(link, '_blank')}/>
        </div>
     );
}

export default IconButton;