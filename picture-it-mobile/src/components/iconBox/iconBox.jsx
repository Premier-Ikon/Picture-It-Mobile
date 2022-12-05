import './iconBox.css';

function IconBox({image, headerText, contentText}) {
    return ( 
        <div className='icon-box-container'>
            <div className="image-circle-container">
                <img className={'icon-box-image'} src={image} alt="TEST"></img>
            </div>
            <div className='text-container'>
                <h3 className="header-text-icon-box">{headerText}</h3>
                <p className="content-text-icon-box" style={{marginTop: '-10px', color: 'rgb(128, 128, 128)'}}>{contentText}</p>
            </div>
        </div>
     );
}

export default IconBox;