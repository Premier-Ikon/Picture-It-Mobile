import './carasoulItem.css';

import Button from '../button/button';

function CarasoulItem({headerText, secondaryText, image, path, buttonText}) {
    return ( 
        <div className='carasoul-item-container'>
            <div>
                <div style={{width: '350px'}}>
                    <h3 style={{fontSize: '50px'}} className='general-standard-header'>{headerText}</h3>
                    <p style={{marginTop: '-25px'}}>{secondaryText}</p>
                </div>
                <div style={{marginTop: '30px'}}>
                    <Button path={path != null ? path : '/pricing'} children={buttonText}></Button>
                </div>
            </div>
            <div style={{marginLeft: '30%'}}>
                <img className='carasoulPhoto' style={{height: '450px'}} src={image}/>
            </div>
        </div>
     );
}

export default CarasoulItem;