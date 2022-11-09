import './iconBox.css';

function IconBox({image, headerText, contentText}) {
    return ( 
        <div className='icon-box-container'>
            <div className="image-circle-container">
                <img style={{height: '86px'}} src={image} alt="TEST"></img>
            </div>
            <div className='text-container'>
                <h3 style={{fontSize: '24px'}}>{headerText}</h3>
                <p style={{marginTop: '-10px'}}>{contentText}</p>
            </div>
        </div>
     );
}

export default IconBox;