import './carasoulItemMobile.css';

import Button from '../button/button';

function CarasoulItemMobile({headerText, secondaryText, image, path, buttonText}) {
    return ( 
        <div className='carasoul-item-container-mobile'>
            <div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{width: '350px'}}>
                        <h3 style={{fontSize: '50px', textAlign: 'center'}} className='general-standard-header'>{headerText}</h3>
                        <p style={{marginTop: '-35px', textAlign: 'center'}}>{secondaryText}</p>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div style={{marginTop: '10px'}}>
                        <Button buttonStyle={'btn--primary-wide'} path={path != null ? path : '/pricing'} children={buttonText}></Button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CarasoulItemMobile;